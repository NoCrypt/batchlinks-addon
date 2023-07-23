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
    ],
    "[CN] ip2p": [
      "#cnet",
      "https://huggingface.co/ckpt/ControlNet-v1-1/resolve/main/control_v11e_sd15_ip2p_fp16.safetensors\nhttps://huggingface.co/ckpt/ControlNet-v1-1/resolve/main/control_v11e_sd15_ip2p_fp16.yaml",
    ],
    "[CN] shuffle": [
      "#cnet",
      "https://huggingface.co/ckpt/ControlNet-v1-1/resolve/main/control_v11e_sd15_shuffle_fp16.safetensors\nhttps://huggingface.co/ckpt/ControlNet-v1-1/resolve/main/control_v11e_sd15_shuffle_fp16.yaml",
    ],
    "[CN] tile": [
      "#cnet",
      "https://huggingface.co/ckpt/ControlNet-v1-1/resolve/main/control_v11f1e_sdtile_fp16.safetensors\nhttps://huggingface.co/ckpt/ControlNet-v1-1/resolve/main/control_v11f1e_sdtile_fp16.yaml",
    ],
    "[CN] depth": [
      "#cnet",
      "https://huggingface.co/ckpt/ControlNet-v1-1/resolve/main/control_v11f1p_sd15_depth_fp16.safetensors\nhttps://huggingface.co/ckpt/ControlNet-v1-1/resolve/main/control_v11f1p_sd15_depth_fp16.yaml",
    ],
    "[CN] canny": [
      "#cnet",
      "https://huggingface.co/ckpt/ControlNet-v1-1/resolve/main/control_v11p_sd15_canny_fp16.safetensors\nhttps://huggingface.co/ckpt/ControlNet-v1-1/resolve/main/control_v11p_sd15_canny_fp16.yaml",
    ],
    "[CN] depth": [
      "#cnet",
      "https://huggingface.co/ckpt/ControlNet-v1-1/resolve/main/control_v11p_sd15_depth_fp16.safetensors\nhttps://huggingface.co/ckpt/ControlNet-v1-1/resolve/main/control_v11p_sd15_depth_fp16.yaml",
    ],
    "[CN] inpaint": [
      "#cnet",
      "https://huggingface.co/ckpt/ControlNet-v1-1/resolve/main/control_v11p_sd15_inpaint_fp16.safetensors\nhttps://huggingface.co/ckpt/ControlNet-v1-1/resolve/main/control_v11p_sd15_inpaint_fp16.yaml",
    ],
    "[CN] lineart": [
      "#cnet",
      "https://huggingface.co/ckpt/ControlNet-v1-1/resolve/main/control_v11p_sd15_lineart_fp16.safetensors\nhttps://huggingface.co/ckpt/ControlNet-v1-1/resolve/main/control_v11p_sd15_lineart_fp16.yaml",
    ],
    "[CN] mlsd": [
      "#cnet",
      "https://huggingface.co/ckpt/ControlNet-v1-1/resolve/main/control_v11p_sd15_mlsd_fp16.safetensors\nhttps://huggingface.co/ckpt/ControlNet-v1-1/resolve/main/control_v11p_sd15_mlsd_fp16.yaml",
    ],
    "[CN] normalbae": [
      "#cnet",
      "https://huggingface.co/ckpt/ControlNet-v1-1/resolve/main/control_v11p_sd15_normalbae_fp16.safetensors\nhttps://huggingface.co/ckpt/ControlNet-v1-1/resolve/main/control_v11p_sd15_normalbae_fp16.yaml",
    ],
    "[CN] openpose": [
      "#cnet",
      "https://huggingface.co/ckpt/ControlNet-v1-1/resolve/main/control_v11p_sd15_openpose_fp16.safetensors\nhttps://huggingface.co/ckpt/ControlNet-v1-1/resolve/main/control_v11p_sd15_openpose_fp16.yaml",
    ],
    "[CN] scribble": [
      "#cnet",
      "https://huggingface.co/ckpt/ControlNet-v1-1/resolve/main/control_v11p_sd15_scribble_fp16.safetensors\nhttps://huggingface.co/ckpt/ControlNet-v1-1/resolve/main/control_v11p_sd15_scribble_fp16.yaml",
    ],
    "[CN] seg": [
      "#cnet",
      "https://huggingface.co/ckpt/ControlNet-v1-1/resolve/main/control_v11p_sd15_seg_fp16.safetensors\nhttps://huggingface.co/ckpt/ControlNet-v1-1/resolve/main/control_v11p_sd15_seg_fp16.yaml",
    ],
    "[CN] softedge": [
      "#cnet",
      "https://huggingface.co/ckpt/ControlNet-v1-1/resolve/main/control_v11p_sd15_softedge_fp16.safetensors\nhttps://huggingface.co/ckpt/ControlNet-v1-1/resolve/main/control_v11p_sd15_softedge_fp16.yaml",
    ],
    "[CN] lineart_anime": [
      "#cnet",
      "https://huggingface.co/ckpt/ControlNet-v1-1/resolve/main/control_v11p_sd15s2_lineart_anime_fp16.safetensors\nhttps://huggingface.co/ckpt/ControlNet-v1-1/resolve/main/control_v11p_sd15s2_lineart_anime_fp16.yaml",
    ],
    "[CN] tile": [
      "#cnet",
      "https://huggingface.co/ckpt/ControlNet-v1-1/resolve/main/control_v11u_sd15_tile_fp16.safetensors\nhttps://huggingface.co/ckpt/ControlNet-v1-1/resolve/main/control_v11u_sd15_tile_fp16.yaml",
    ],
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
