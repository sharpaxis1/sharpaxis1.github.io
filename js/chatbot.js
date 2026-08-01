(function(){
  var WHATSAPP_NUMBER = '917698614508';
  var GREETING = "Hello! Welcome to Sharp Axis. Ask me about our services, contact info or workshop location, or jump straight to WhatsApp.";

  var REPLIES = {
    services: {
      label: 'Our Services',
      answer: 'We handle all type of EDM work: Sinker / Die-Sinking EDM, Spark Erosion Machining, General Spark/EDM Job Work, and Tool, Punch & Die Repair. See the Services page for full details.'
    },
    contact: {
      label: 'Contact Info',
      answer: 'Call or WhatsApp us:\nVarshil Patel — +91 76986 14508\nNikhil Patel — +91 63522 47671\nEmail — sharpaxis111@gmail.com'
    },
    location: {
      label: 'Workshop Location',
      answer: 'Near Somnath Web Bridge, Plot No. 10, Somnath Industrial Park, Rajkot, Gujarat.'
    },
    whatsapp: {
      label: 'Chat on WhatsApp',
      answer: 'Opening WhatsApp for you now.'
    }
  };

  function init(){
    var toggle = document.getElementById('chatbotToggle');
    var panel = document.getElementById('chatbotPanel');
    var messages = document.getElementById('chatbotMessages');
    var quickReplies = document.getElementById('chatbotQuickReplies');
    if(!toggle || !panel || !messages || !quickReplies) return;

    function addMessage(text, from){
      var el = document.createElement('div');
      el.className = 'msg ' + from;
      el.textContent = text;
      messages.appendChild(el);
      messages.scrollTop = messages.scrollHeight;
    }

    function handleReply(key){
      var reply = REPLIES[key];
      if(!reply) return;
      addMessage(reply.label, 'user');
      addMessage(reply.answer, 'bot');
      if(key === 'whatsapp'){
        window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent('Hi Sharp Axis, I have an enquiry about EDM job work.'), '_blank', 'noopener');
      }
    }

    Object.keys(REPLIES).forEach(function(key){
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = REPLIES[key].label;
      btn.addEventListener('click', function(){ handleReply(key); });
      quickReplies.appendChild(btn);
    });

    var greeted = false;
    function setOpen(open){
      panel.classList.toggle('open', open);
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
      if(open && !greeted){
        addMessage(GREETING, 'bot');
        greeted = true;
      }
    }

    toggle.addEventListener('click', function(){
      setOpen(!panel.classList.contains('open'));
    });

    window.setTimeout(function(){
      if(!panel.classList.contains('open')) setOpen(true);
    }, 2500);
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
