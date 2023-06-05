class Footer extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
      <div class="footer">
      <div class="footer_container">
        <div class="fouter_top">
          <div class="brand-info">
            <h2 class="brand-logo">YoungHealth</h2>
              <p class="brand-desc"></p>
                <span class="copyright"></span>
          </div>
        </div>
      </div>
    </div>
        `;
    }
  }
  
  customElements.define('app-footer', Footer);