class Hubspot {
  constructor(formId) {
    this.formId = formId;
    this.form = this.getForm();
    this.doc = this.getIframeDocument();
  }

  getForm() {
    return document.getElementById(this.formId);
  }

  getIframeForm() {
    return this.doc.querySelector('.hbspt-form');
  }

  getIframeDocument() {
    const iframe = this.form.querySelector('iframe');
    return iframe.contentWindow.document;
  }

  getHead() {
    return this.doc.querySelector('head');
  }

  getSubmit() {
    return this.doc.querySelector('input[type="submit"]');
  }

  applyCustomStyles() {
    const head = this.getHead();
    const el = document.createElement('link');
    el.rel = 'stylesheet';
    el.href = '/css/hubspot.css';

    head.appendChild(el);

    this.replaceFileTypeInputs();
  }

  applyFormTheme(theme) {
    const iframeForm = this.getIframeForm();

    iframeForm.classList.add(`theme-${theme}`);
  }

  replaceFileTypeInputs() {
    const inputs = this.doc.querySelectorAll('form input[type="file"]');

    inputs.forEach((input) => {
      const field = input.parentElement.parentElement;
      const legend = field.querySelector('legend.hs-field-desc');
      const inputBlock = field.querySelector('.input');
      const el = document.createElement('input');
      const img = document.createElement('img');
      const elPlaceholder = input.required
        ? `${legend.textContent}*`
        : legend.textContent;

      // hide input[type=file]
      input.style.display = 'none';

      // set clip img url
      img.src = '/icons/attach_icon.svg';

      // hide .hs-form-required
      legend.style.display = 'none';

      // set attrs for new file input with custom styles
      el.classList.add('hs-input');
      el.readOnly = true;
      el.placeholder = elPlaceholder;

      // changing input placeholder when change uploaded file
      input.addEventListener('change', () => {
        const files = [...input.files];

        el.placeholder = files.length > 0
          ? files.map(file => file.name).join(', ') : elPlaceholder;
      });

      // when clicking on new file input then click on input[type=file]
      el.addEventListener('click', () => input.click());

      inputBlock.append(el);
      inputBlock.append(img);
    });
  }

  sendForm() {
    this.getSubmit().click();
  }
}

export default Hubspot;