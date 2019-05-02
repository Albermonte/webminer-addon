/*  
**  Thanks to:
**  https://codepen.io/Goweb/pen/qNBQya
*/

<template>
  <vue-draggable-resizable
    class="drag"
    @dragging="onDrag"
    @dragstop="onDragstop"
    :h="70"
    drag-handle=".addon"
    :resizable="false"
    :draggable="!mobile"
    axis="y"
    :y="10"
  >
    <div class="addon expanded" :style="{'top': y || 10}">
      <div class="notification">
        <ShortLogo class="shortnim-logo" @click="toggle"/>
        <ShortnimInfo />
      </div>
      <div @click="toggle" class="container close-btn">
        <NimClose class="nq-icon"/>
      </div>
    </div>
  </vue-draggable-resizable>
</template>


<script>
import NimClose from "../icons/close.svg";
import ShortLogo from "../icons/nimiq_signet_rgb_base_size.svg";

import ShortnimInfo from "@/components/ShortnimInfo";

export default {
  name: "ShortNIM_addon",
  components: {
    NimClose,
    ShortLogo,
    ShortnimInfo
  },
  data() {
    return {
      is_closed: true,
      prevent_open: false,
      seen_before: false,
      overflow: document.body.style.overflow,
      mobile: false,
      y: 0
    };
  },
  mounted() {
    this.seen_before |= parseInt(localStorage.getItem("shortnim_before"));
    if (process.env.NODE_ENV !== "development" && this.seen_before) {
      const addon = document.querySelector(".addon");
      const shortnimLogo = document.querySelector(".shortnim-logo");
      const closeBtn = document.querySelector(".close-btn");
      const notification = document.querySelector(".notification__info");
      notification.style.opacity = 0;
      notification.style.visibility = "hidden";
      addon.style.width = "70px";
      notification.style.opacity = 0;
      closeBtn.style.opacity = 0;
      shortnimLogo.style.left = 0;
      shortnimLogo.style.display = "inherit";
      if (window.innerWidth < 630) {
        this.mobile = true;
        addon.style.top = "55px";
        addon.style.right = "-10px";
        shortnimLogo.style.opacity = "1";
      } else {
        addon.style.right = "-5px";
      }
      shortnimLogo.style.transform = "scale(.8)";
      addon.style.transform = "scale(.6)";
    } else {
      this.is_closed = false;
      localStorage.setItem("shortnim_before", 1);
    }
  },
  methods: {
    onDrag(x, y) {
      if (window.innerWidth < 630) return;
      this.y = y;
      this.prevent_open = true;
      /*
      Desactivado de momento porque queda feo hasta encontrar una solución para arrastrar en movil
      document.body.style.overflow = "hidden";
      */
    },
    onDragstop() {
      if (window.innerWidth < 630) return;
      setTimeout(() => (this.prevent_open = false), 100);
      //document.body.style.overflow = this.overflow;
    },
    toggle() {
      if (this.prevent_open) return;
      this.is_closed ? this.openNotification() : this.closeNotification();
      this.is_closed = !this.is_closed;
    },
    openNotification() {
      const addon = document.querySelector(".addon");
      const shortnimLogo = document.querySelector(".shortnim-logo");
      const closeBtn = document.querySelector(".close-btn");
      const notification = document.querySelector(".notification__info");
      setTimeout(() => (shortnimLogo.style.transform = "scale(1.12)"), 300);
      addon.style.transform = "scale(1)";
      if (window.innerWidth < 630) {
        shortnimLogo.style.opacity = "0";
      }
      addon.style.right = "10px";
      setTimeout(() => {
        notification.style.visibility = "visible";
        addon.style.width = "calc(100vw - var(--nimiq-lateral-margin) * 2)";
        addon.style.background = "#fff";
        addon.style.boxShadow = " 0 4px 64px rgba(0, 0, 0, 0.15)";
        closeBtn.style.opacity = 1;
        shortnimLogo.style.left = "-20px";
        if (window.innerWidth < 630) {
          shortnimLogo.style.display = "none";
        }
      }, 300);
      setTimeout(() => {
        notification.style.opacity = 1;
      }, 700);
    },
    closeNotification() {
      const addon = document.querySelector(".addon");
      const shortnimLogo = document.querySelector(".shortnim-logo");
      const closeBtn = document.querySelector(".close-btn");
      const notification = document.querySelector(".notification__info");
      notification.style.opacity = 0;
      setTimeout(() => {
        notification.style.visibility = "hidden";
        addon.style.width = "70px";
        notification.style.opacity = 0;
        closeBtn.style.opacity = 0;
        setTimeout(() => {
          shortnimLogo.style.left = 0;
          shortnimLogo.style.display = "inherit";
        }, 100);
      }, 300);

      setTimeout(() => (shortnimLogo.style.transform = "scale(.65)"), 600);
      setTimeout(() => {
        if (window.innerWidth < 630) {
          shortnimLogo.style.opacity = "1";
          addon.style.right = "-10px";
        } else {
          addon.style.right = "-5px";
        }
        addon.style.transform = "scale(.6)";
      }, 700);
    }
  }
};
</script>

// Style
<style lang="less" scoped>
html {
  .addon {
    position: fixed;
    --nimiq-lateral-margin: 10px;
    right: 10px;
    padding: 5px 15px;
    z-index: 100000;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    height: 55px;
    width: calc(100vw - var(--nimiq-lateral-margin) * 2);
    max-width: 570px;
    border-radius: 5px;
    background: #fff;
    box-shadow: 0 4px 64px rgba(0, 0, 0, 0.15);
    transition: 0.6s all ease;
    line-height: 1;
    cursor: grab;

    &.expanded {
      height: 70px;
    }

    .notification {
      max-height: 73px;
      font-size: 2vw;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      text-align: center;
      visibility: visible;
      opacity: 1;
      transition: 0.3s;
      overflow: hidden;

      &:nth-of-type(1) {
        transition-delay: 0.4s;
      }
      &:nth-of-type(2) {
        transition-delay: 0.5s;
      }
      &:nth-of-type(3) {
        transition-delay: 0.6s;
      }
      &:nth-of-type(4) {
        transition-delay: 0.7s;
      }

      &.hidden {
        width: 0;
        visibility: hidden;
        opacity: 0;
        text-overflow: ellipsis;

        &:nth-of-type(1) {
          transition-delay: 0.3s;
        }
        &:nth-of-type(2) {
          transition-delay: 0.2s;
        }
        &:nth-of-type(3) {
          transition-delay: 0.1s;
        }
        &:nth-of-type(4) {
          transition-delay: 0s;
        }
      }

      .shortnim-logo {
        position: absolute;
        width: 70px;
        height: 70px;
        left: -20px;
        transform: scale(1.12);
        transition: 0.3s all ease;
        cursor: pointer;
      }
    }

    .container {
      width: 24px;
      height: 24px;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      cursor: pointer;
    }

    .nq-icon {
      width: 24px;
      height: 24px;
      overflow: visible;
      color: var(--nimiq-blue) !important;
    }
  }

  @media screen and (max-width: 630px) {
    .addon {
      padding: 5px;

      .notification {
        flex-direction: column-reverse;
        justify-content: center;
        height: 100%;
        margin: 5px 0;

        .shortnim-logo {
          display: none;
        }
      }

      .container {
        transform: scale(0.7);
      }
    }
  }
}

.drag {
  transition: 0.1s top cubic-bezier(1, 0.9, 0.45, 1.15);
}
</style>
