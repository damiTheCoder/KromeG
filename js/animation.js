function Toggle(id, closeHeight, openHeight, ms) {
    var obj = document.getElementById(id),
      o = Toggle['zxc' + id],
      to;
  
    if (!o && obj) {
      Toggle['zxc' + id] = o = {
        obj: obj,
        now: 0,
        ms: 500,
        ud: true
      };
    }
  
    if (o) {
      ms = typeof(ms) == 'number' ? ms : o.ms;
      obj.style.height = o.ud ? closeHeight + 'px' : openHeight + 'px';
      to = o.ud ? openHeight : closeHeight;
      clearTimeout(o.dly);
      animate(o, o.now, to, new Date(), ms * Math.abs((to - o.now) / openHeight));
      o.ud = !o.ud;
    }
  }
  
  function animate(o, f, t, srt, mS) {
    var oop = this,
      ms = new Date().getTime() - srt,
      now = (t - f) / mS * ms + f;
  
    if (isFinite(now)) {
      o.now = Math.max(now, 0);
      o.obj.style.height = o.now + 'px';
    }
  
    if (ms < mS) {
      o.dly = setTimeout(function() {
        oop.animate(o, f, t, srt, mS);
      }, 10);
    } else {
      o.now = t;
      o.obj.style.height = o.now + 'px';
    }
  }