<script>
  export let visible = true;
  export let content = "Hello world";

  // You can add more props here for timer, score, etc.
</script>

<div
  class="floating-ui"
  class:visible
>
  <div class="content">
    {content}
  </div>
</div>

<style>
  .floating-ui {
    position: absolute;
    top: 5px;
    right: 50px;
    background-color: #1d1d1d;
    border-radius: 8px;
    padding: 12px 16px;
    z-index: 100;
    opacity: 0;
    outline: 2px solid rgba(255, 255, 255, 0.1);
    transform: translateY(-10px);
    transition: opacity 0.3s ease, transform 0.3s ease;
    pointer-events: none;
  }

  .floating-ui.visible {
    opacity: 1;
    transform: translateY(0);
    pointer-events: all;
  }

  .content {
    font-size: 16px;
    font-weight: 500;
    color: #ebebeb;
  }
</style>
