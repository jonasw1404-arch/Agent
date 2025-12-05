<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2685.1">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; min-height: 14.0px}
  </style>
</head>
<body>
<p class="p1">document.getElementById("checkButton").addEventListener("click", function() {</p>
<p class="p1"><span class="Apple-converted-space">    </span>const input = document.getElementById("codeInput").value;</p>
<p class="p1"><span class="Apple-converted-space">    </span>const message = document.getElementById("message");</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>if (input === "5443") {</p>
<p class="p1"><span class="Apple-converted-space">        </span>message.style.color = "#00ff8c";</p>
<p class="p1"><span class="Apple-converted-space">        </span>message.textContent = "Du hast es geschafft!";</p>
<p class="p1"><span class="Apple-converted-space">    </span>} else {</p>
<p class="p1"><span class="Apple-converted-space">        </span>message.style.color = "#ff4444";</p>
<p class="p1"><span class="Apple-converted-space">        </span>message.textContent = "Falsches Passwort — versuch es nochmal.";</p>
<p class="p1"><span class="Apple-converted-space">        </span>document.getElementById("codeInput").value = "";</p>
<p class="p1"><span class="Apple-converted-space">        </span>document.getElementById("codeInput").focus();</p>
<p class="p1"><span class="Apple-converted-space">    </span>}</p>
<p class="p1">});.js</p>
</body>
</html>
