/**
 * Contact form. There is no backend in this phase, so a valid submission opens
 * the visitor's mail client with a prepared message instead of POSTing anywhere.
 */
namespace FEA.Contact {
  const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  function setError(field: HTMLElement, messageKey: string | null): boolean {
    const wrapper = field.closest('.field');
    const hint = wrapper ? wrapper.querySelector<HTMLElement>('.field__error') : null;
    if (messageKey) {
      field.setAttribute('aria-invalid', 'true');
      if (hint) {
        hint.textContent = I18n.t(messageKey);
        hint.hidden = false;
      }
      return false;
    }
    field.removeAttribute('aria-invalid');
    if (hint) {
      hint.textContent = '';
      hint.hidden = true;
    }
    return true;
  }

  function buildMailto(values: Record<string, string>): string {
    const subject = '[FEA] ' + values.topic + ' — ' + values.name;
    const body = [
      values.message,
      '',
      '---',
      'Name: ' + values.name,
      'E-Mail: ' + values.email,
      'Antwortsprache / answer language: ' + values.lang,
      'Thema / topic: ' + values.topic,
    ].join('\n');
    return (
      'mailto:' +
      Data.CONTACT_EMAIL +
      '?subject=' +
      encodeURIComponent(subject) +
      '&body=' +
      encodeURIComponent(body)
    );
  }

  export function init(): void {
    const form = document.querySelector<HTMLFormElement>('[data-contact-form]');
    if (!form) return;

    const name = form.querySelector<HTMLInputElement>('#ct-name');
    const email = form.querySelector<HTMLInputElement>('#ct-email');
    const message = form.querySelector<HTMLTextAreaElement>('#ct-message');
    const consent = form.querySelector<HTMLInputElement>('#ct-consent');
    const langSelect = form.querySelector<HTMLSelectElement>('#ct-lang');
    const topicSelect = form.querySelector<HTMLSelectElement>('#ct-topic');
    const success = document.querySelector<HTMLElement>('[data-contact-success]');
    if (!name || !email || !message || !consent || !langSelect || !topicSelect) return;

    function fillLanguages(): void {
      const previous = langSelect!.value || I18n.getLang();
      langSelect!.innerHTML = '';
      LANGUAGES.forEach(function (lang) {
        const option = document.createElement('option');
        option.value = lang.code;
        option.textContent = lang.native;
        langSelect!.appendChild(option);
      });
      langSelect!.value = previous;
    }

    function fillTopics(): void {
      const previous = topicSelect!.value || 'scholarship';
      topicSelect!.innerHTML = '';
      ['scholarship', 'university', 'ausbildung', 'course', 'volunteer', 'other'].forEach(function (topic) {
        const option = document.createElement('option');
        option.value = topic;
        option.textContent = I18n.t('ct.topic.' + topic);
        topicSelect!.appendChild(option);
      });
      topicSelect!.value = previous;
    }

    fillLanguages();
    fillTopics();

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      let valid = true;
      valid = setError(name!, name!.value.trim().length < 2 ? 'ct.err.name' : null) && valid;
      valid = setError(email!, EMAIL_PATTERN.test(email!.value.trim()) ? null : 'ct.err.email') && valid;
      valid = setError(message!, message!.value.trim().length < 20 ? 'ct.err.message' : null) && valid;
      valid = setError(consent!, consent!.checked ? null : 'ct.err.consent') && valid;

      if (!valid) {
        const firstInvalid = form.querySelector<HTMLElement>('[aria-invalid="true"]');
        if (firstInvalid) firstInvalid.focus();
        if (success) success.hidden = true;
        return;
      }

      const href = buildMailto({
        name: name!.value.trim(),
        email: email!.value.trim(),
        message: message!.value.trim(),
        lang: I18n.meta(langSelect!.value as LangCode).native,
        topic: I18n.t('ct.topic.' + topicSelect!.value),
      });

      window.location.href = href;
      if (success) {
        success.hidden = false;
        success.textContent = I18n.t('ct.ok');
        success.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });

    I18n.onChange(function () {
      fillLanguages();
      fillTopics();
      if (success && !success.hidden) success.textContent = I18n.t('ct.ok');
    });
  }
}
