var modalWrapper = document.getElementById('modal-wrapper');
var portalBtn = document.getElementById('portal-btn');
var closeBtn = document.getElementsByClassName('bas-close');

portalBtn.onclick = function() {
  modalWrapper.style.display = "block";
  modalWrapper.innerHTML = basMessages[1];
}

closeBtn.onclick = function() {
  modalWrapper.style.display = "none";
}

var basMessages = ['<form action="https://secure.healthx.com/autologin.aspx" method="post" class="modal-content animate"><div class="imgcontainer"><span onclick="document.getElementById(\'modal-wrapper\').style.display=\'none\'" title="Close PopUp" class="bas-close">x</span><img src="http://brainstorm.solutions/bas/wp-content/uploads/2017/02/logo.png" class="modal-logo"/><h1 style="text-align:center">Portal Login</h1></div><div class="container"><input type="text" placeholder="Username" name="username"/><input type="password" placeholder="Password" name="password"/><button id="login-btn" type="submit">Login</button><input type="checkbox" style="margin:10px;"/>Remember me <a href="#" style="text-decoration:none; float:right; margin-right:34px; margin-top:26px;">Forgot Password ?</a></div></form>', '<div class="team-bio-modal" style="display: block;"><div class="team-bio-modal-scroll"><span onclick="document.getElementById(\'modal-wrapper\').style.display=\'none\'" title="Close PopUp" class="bas-close">x</span><div class="team-bio-modal-content"><img src="http://brainstorm.solutions/bas/wp-content/uploads/2017/08/Team_Jim-C.jpg" class="bio-picture"/><div class="team-bio-name"><h4>James E. Connell</h4><span>CEO</span><br><a href="https://www.linkedin.com/in/james-connell-090a6114/" title="View LinkedIn profile" target="_blank">LinkedIn Profile <i class="icon-linkedin"></i></a></div><p>Jim graduated from the University of Iowa with a degree in Finance and Marketing. He received his MBA from the University of Chicago, Booth School of Business. Prior to joining BAS, Jim spent 22 years with Inland Steel in a variety of sales, marketing, and strategic management positions. Jim was also the President of Energy Absorptions System, the largest operating company of Quixote Corporation from 1999 to 2009. In 2010, Jim joined BAS as Chief Executive Officer.</p><p>Working with his BAS partners, Joe Toscano and Marty Joseph, he has created a growth strategy for the organization to identify new opportunities and create a culture of greater accountability. With over 30 years of business experience Jim brings valuable management skills to the team. Jim adds significant leadership to his employee, broker, and client relationships.</p><p class="bio-perspective">Jim’s Perspective: "I am most satisfied when I see our employees reach their full potential. Here at BAS we like to support a competitive spirit in order to remain the best business partner to our brokers and clients."</p><p>Jim is a husband, father of two, and a grandfather. He enjoys spending time with his family, golfing, and traveling. He was Vice Chairman of the American Road and Transportation Builders Association from 2004 to 2009. Jim is currently a member of Cigna’s Payer Advisory Council, SPBA, and SIIA.</p></div> <!-- end .team-bio-modal-content --></div> <!-- end .team-bio-modal-scroll --></div>', '<div class="team-bio-modal" style="display: block;"><div class="modal-wrapper-scroll"><span onclick="document.getElementById(\'modal-wrapper\').style.display=\'none\'" title="Close PopUp" class="bas-close">x</span><div class="modal-wrapper-content"><img src="http://brainstorm.solutions/bas/wp-content/uploads/2017/08/Team_Joe-T.jpg" class="bio-picture"/><div class="team-bio-name"><h4>Joe Toscano</h4><span>CFO</span></div><p>Joe is a graduate of Calumet College with a Bachelor’s Degree in Accounting. Prior to his employment with BAS Joe held various accounting positions with Jays Foods including Central Zone Controller for Borden Snacks Divisions who acquired Jays in 1986.</p><p>Joe joined BAS in 1989 and was initially responsible for operations. He is currently an equity partner and holds the title of CFO responsible for business operations and accounting functions.</p><p class="bio-perspective">Joe’s Perspective: “BAS excels at handling a complex set of client variables through enterprise level solutions delivering on its value proposition.”</p><p>Joe is a husband, father of three daughters, and has two grandchildren. He enjoys golfing, cooking, travel, and spending time with his family. Joe has served on boards of several privately held companies, and currently sits on the Board of Calumet Country Club.</p></div> <!-- end .modal-wrapper-content --></div> <!-- end .modal-wrapper-scroll --></div>', '<div class="team-bio-modal" style="display: block;"><div class="modal-wrapper-scroll"><span onclick="document.getElementById(\'modal-wrapper\').style.display=\'none\'" title="Close PopUp" class="bas-close">x</span><div class="modal-wrapper-content"><img src="http://brainstorm.solutions/bas/wp-content/uploads/2017/08/Team_Marty-J.jpg" class="bio-picture"/><div class="team-bio-name"><h4>M. W. Joseph</h4><span>President</span><br><a href="https://www.linkedin.com/in/marty-joseph-9b21547/" title="View LinkedIn profile" target="_blank">LinkedIn Profile <i class="icon-linkedin"></i></a></div><p>Marty graduated from the University of Illinois Chicago with a Bachelor of Science in Accounting. Previous to joining BAS, Marty worked for Carson Pirie Scott &amp; Company for 6 years in the Accounting Department. In his role as the Audit Manager he supervised a staff of 10 Auditors that performed the following functions: Financial Audits, Operational Audits, System Audits, Construction Audits, Pension Plans, and Medical Benefits. Marty has been with BAS since 1985, and is currently the President.</p><p>Leading the Sales and Marketing efforts of BAS, Marty has grown the company from only administering employee benefit plans to offering a full array of cost management solution services. Marty has developed the organization\'s capabilities to become an industry leader in Third Party Administration.</p><p class="bio-perspective">Marty’s Perspective: “Our organization allows our clients to address the problems of rising health care costs more aggressively while actively engaging their employees in their own health care management.”</p><p>Marty is a husband, and father of two girls. His free time is spent with his family, living a healthy lifestyle through fitness and food. Traveling and experiencing new cultures is high on his list. Marty is an active member and sits on the HM Advisory Board as well as Cigna Payer Solution Board.</p></div> <!-- end .modal-wrapper-content --></div> <!-- end .modal-wrapper-scroll --></div>'];