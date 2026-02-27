window.HELP_IMPROVE_VIDEOJS = false;


function toggleExpand(targetId, btnElement) {
    const container = document.getElementById(targetId);
    const isExpanding = !container.classList.contains('is-active');
    
    // Toggle active state
    container.classList.toggle('is-active');
    btnElement.classList.toggle('is-active');
    
    // Smoothly update the text
    const textSpan = btnElement.querySelector('.button-text');
    textSpan.style.opacity = '0';
    
    setTimeout(() => {
        textSpan.textContent = isExpanding ? "Show Less" : "More Examples";
        textSpan.style.opacity = '1';
    }, 150);
}


$(document).ready(function () {
  
  // --- Navbar Logic (Essential for mobile menu) ---
  $(".navbar-burger").click(function () {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  // --- Method Comparison Macro (Essential for your grid) ---
  $('[class^="results-macro"]').each(function() {
      const dataset = $(this).data('dataset');
      const seq = $(this).data('seq');
      
      // Base path construction
      const basePath = `static/image/method_comparison/${dataset}/${seq}`;

      // LOGIC: Handle Missing GT Motion for Bonn
      let gtMotionHtml;
      if (dataset === 'bonn') {
          // Blank placeholder
          gtMotionHtml = `<div style="width:100%; height:100%; background-color:#f5f5f5; border-radius:4px;"></div>`;
      } else {
          // Standard Image
          gtMotionHtml = `<img src="${basePath}/m_gt.png" alt="Ground Truth Motion">`;
      }

      const htmlContent = `
          <div class="input-gif-wrapper">
              <img class="input-image-frame" src="${basePath}/img0.png" alt="Frame 1">
              <img class="input-image-frame" src="${basePath}/img1.png" alt="Frame 2">
              <div class="overlay-label">Input</div>
          </div>

          <div class="method-result-wrapper">
              <img src="${basePath}/d_dy.png" alt="DynaDUSt3R Depth">
          </div>
          <div class="method-result-wrapper">
              <img src="${basePath}/d_zm.png" alt="ZeroMSF Depth">
          </div>
          <div class="method-result-wrapper">
              <img src="${basePath}/d_st.png" alt="St4RTrack Depth">
          </div>
          <div class="method-result-wrapper">
              <img src="${basePath}/d_ours.png" alt="Our Method Depth">
          </div>
          <div class="method-result-wrapper">
              <img src="${basePath}/d_gt.png" alt="Ground Truth Depth">
              <div class="overlay-label">Depth</div>
          </div>

          <div class="method-result-wrapper">
              <img src="${basePath}/m_dy.png" alt="DynaDUSt3R Motion">
          </div>
          <div class="method-result-wrapper">
              <img src="${basePath}/m_zm.png" alt="ZeroMSF Motion">
          </div>
          <div class="method-result-wrapper">
              <img src="${basePath}/m_st.png" alt="St4RTrack Motion">
          </div>
          <div class="method-result-wrapper">
              <img src="${basePath}/m_ours.png" alt="Our Method Motion">
          </div>
          
          <div class="method-result-wrapper">
              ${gtMotionHtml}
              <div class="overlay-label">Motion</div>
          </div>

          <div class="grid-spacer"></div>
      `;

      // Inject the generated HTML
      $(this).replaceWith(htmlContent);
  });


// --- 4D Interpolation Macro ---
  $('.interpolation-macro').each(function() {
      const degree = $(this).data('degree');
      const scene = $(this).data('scene');
      
      const basePath = `static/image/4d_interpolation/${degree}/${scene}`;

      const htmlContent = `
          <div class="input-gif-wrapper">
              <img class="input-image-frame" src="${basePath}/img0.jpg" alt="Frame 1">
              <img class="input-image-frame" src="${basePath}/img1.jpg" alt="Frame 2">
              <div class="overlay-label">Input</div>
          </div>

          <div></div>

          <div class="method-result-wrapper">
              <video autoplay muted loop playsinline>
                  <source src="${basePath}/video2.mp4" type="video/mp4">
              </video>
              <div class="overlay-label">Novel View</div>
          </div>

          <div class="method-result-wrapper">
              <img src="${basePath}/depth2.gif" alt="Interpolated Depth">
              <div class="overlay-label">Depth</div>
          </div>

          <div class="method-result-wrapper">
              <img src="${basePath}/motion2.gif" alt="Interpolated Motion">
              <div class="overlay-label">Motion</div>
          </div>

          <div class="grid-spacer"></div>
      `;

      $(this).replaceWith(htmlContent);
  });



});