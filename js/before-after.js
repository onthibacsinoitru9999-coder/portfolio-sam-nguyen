/**
 * Interactive Before - After Image Comparison Slider
 * Tương tác kéo so sánh hình ảnh trước và sau phẫu thuật
 */

function initBeforeAfterSliders() {
  const containers = document.querySelectorAll('.ba-container');

  containers.forEach(container => {
    // Tránh khởi tạo nhiều lần
    if (container.dataset.initialized === 'true') return;
    container.dataset.initialized = 'true';

    const afterWrapper = container.querySelector('.ba-after-wrapper');
    const handle = container.querySelector('.ba-slider-handle');

    if (!afterWrapper || !handle) return;

    let isDragging = false;

    function setPosition(xPos) {
      const rect = container.getBoundingClientRect();
      let pos = (xPos - rect.left) / rect.width;

      // Giới hạn trong khoảng 0% - 100%
      if (pos < 0.05) pos = 0.05;
      if (pos > 0.95) pos = 0.95;

      const percentage = pos * 100;
      afterWrapper.style.width = `${percentage}%`;
      handle.style.left = `${percentage}%`;
    }

    // Mouse events
    handle.addEventListener('mousedown', (e) => {
      e.preventDefault();
      isDragging = true;
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      setPosition(e.clientX);
    });

    // Touch events for mobile
    handle.addEventListener('touchstart', (e) => {
      isDragging = true;
    }, { passive: true });

    window.addEventListener('touchend', () => {
      isDragging = false;
    });

    window.addEventListener('touchmove', (e) => {
      if (!isDragging || !e.touches[0]) return;
      setPosition(e.touches[0].clientX);
    }, { passive: true });

    // Click anywhere on container to move slider
    container.addEventListener('click', (e) => {
      if (e.target.closest('.ba-slider-handle')) return;
      setPosition(e.clientX);
    });
  });
}

// Khởi chạy khi DOM load xong
document.addEventListener('DOMContentLoaded', () => {
  initBeforeAfterSliders();
});
