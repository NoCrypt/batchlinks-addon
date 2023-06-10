onUiLoaded(() => {
  
  // Edit as you wish to add more links!
  const linkList = {
    "Any VAE": [
      "#vae",
      "https://huggingface.co/NoCrypt/resources/resolve/main/VAE/any.vae.safetensors",
    ],
    "Blessed VAE": [ 
      "#vae",
      "https://huggingface.co/NoCrypt/resources/resolve/main/VAE/blessed2.vae.safetensors",
    ],
    "WD VAE": [
      "#vae",
      "https://huggingface.co/NoCrypt/resources/resolve/main/VAE/wd.vae.safetensors",
    ]
  };
  
  const textareaEl = document.querySelector('#tab_batchlinks > * textarea[rows="5"]');

  if (!textareaEl) {
    return;
  }

  function makeButton(text, onclick) {
    //lg primary gradio-button svelte-1ipelgc
    const button_el = document.createElement("button");
    button_el.className = "lg primary gradio-button svelte-1ipelgc";
    button_el.style = "margin-right: 10px;";
    button_el.innerHTML = text;
    button_el.onclick = onclick;
    return button_el;
  }
  
  // append as sibling
  const div_el = document.createElement('div');
  div_el.id = 'bl-addon';
  div_el.style = 'margin-top: 10px; margin-bottom: 10px;';
  div_el.innerHTML = `<p><b>[Batch Links Addon by NoCrypt]</b></p>`
  

  for (const [name, [type, url]] of Object.entries(linkList)) {
    const button_el = makeButton(name, () => {
      if (textareaEl.value.indexOf(url) !== -1) {
        alert("Link already added!");
        return;
      }
      if (textareaEl.value.split("#").slice(-1)[0]?.indexOf(type.slice(1)+"\n") !== -1) {
        textareaEl.value = textareaEl.value + "\n" + url;
      } else {
        textareaEl.value = textareaEl.value + "\n" + type + "\n" + url;
      }
      textareaEl.dispatchEvent(new Event("input", { bubbles: true })); // Gradio somtimes just weird.
    });
    div_el.appendChild(button_el);
  }

  textareaEl.parentNode.insertBefore(div_el, textareaEl.nextSibling);
})
