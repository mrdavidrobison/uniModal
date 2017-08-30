var modalWrapper = document.getElementById('modal-wrapper');
var closeBtn = document.getElementsByClassName('bas-close');

var docId = function(id) { 
  return document.getElementById(id); 
};

// array that includes [0]: portal login id, [1-8]: ids of bios, total of nine array items
var bioPicOne = [docId('memberArrow'), docId('bas-ceo'), docId('bas-cfo'), docId('bas-pres'), docId('bas-vp-salesops'), docId('bas-vp-sales'), docId('bas-directorbd-mar'), docId('bas-directorbd-ser'), docId('bas-directorbd-wr')];
var bioPicTwo = [docId('bas-directorbd-mwr'), docId('bas-director-bd'), docId('bas-director-mis'), docId('bas-director-fa'), docId('bas-director-acct'), docId('bas-director-loss'), docId('bas-director-claims')];

for (var i = 0; i <= (bioPic.length-1); i++) {
  bioPic[i].onclick = function () {
    modalWrapper.style.display = "block";
    modalWrapper.innerHTML = basMessagesOne[i];
  }
}

closeBtn.onclick = function() {
  modalWrapper.style.display = "none";
}

// array that includes [0]: portal login, [1-8]: bios, total of nine array items
var basMessagesOne = ['<form action="https://secure.healthx.com/autologin.aspx" method="post" class="portal-modal-content animate"><div class="imgcontainer"><span onclick="document.getElementById(\'modal-wrapper\').style.display=\'none\'" title="Close PopUp" class="bas-close">x</span><img src="http://brainstorm.solutions/bas/wp-content/uploads/2017/02/logo.png" class="modal-logo"/><h1 style="text-align:center">Portal Login</h1></div><div class="container"><input type="text" placeholder="Username" name="username"/><input type="password" placeholder="Password" name="password"/><button id="login-btn" type="submit">Login</button><input type="checkbox" style="margin:10px;"/>Remember me <a href="#" style="text-decoration:none; float:right; margin-right:34px; margin-top:26px;">Forgot Password ?</a></div></form>', '<div class="team-bio-modal" style="display: block;"><div class="team-bio-modal-scroll"><span onclick="document.getElementById(\'modal-wrapper\').style.display=\'none\'" title="Close PopUp" class="bas-close">x</span><div class="team-bio-modal-content"><img src="http://brainstorm.solutions/bas/wp-content/uploads/2017/08/Team_Jim-C.jpg" class="bio-picture"/><div class="team-bio-name"><h4>James E. Connell</h4><span>CEO</span><br><a href="https://www.linkedin.com/in/james-connell-090a6114/" title="View LinkedIn profile" target="_blank">LinkedIn Profile <i class="icon-linkedin"></i></a></div><p>Jim graduated from the University of Iowa with a degree in Finance and Marketing. He received his MBA from the University of Chicago, Booth School of Business. Prior to joining BAS, Jim spent 22 years with Inland Steel in a variety of sales, marketing, and strategic management positions. Jim was also the President of Energy Absorptions System, the largest operating company of Quixote Corporation from 1999 to 2009. In 2010, Jim joined BAS as Chief Executive Officer.</p><p>Working with his BAS partners, Joe Toscano and Marty Joseph, he has created a growth strategy for the organization to identify new opportunities and create a culture of greater accountability. With over 30 years of business experience Jim brings valuable management skills to the team. Jim adds significant leadership to his employee, broker, and client relationships.</p><p class="bio-perspective">Jim’s Perspective: "I am most satisfied when I see our employees reach their full potential. Here at BAS we like to support a competitive spirit in order to remain the best business partner to our brokers and clients."</p><p>Jim is a husband, father of two, and a grandfather. He enjoys spending time with his family, golfing, and traveling. He was Vice Chairman of the American Road and Transportation Builders Association from 2004 to 2009. Jim is currently a member of Cigna’s Payer Advisory Council, SPBA, and SIIA.</p></div> <!-- end .team-bio-modal-content --></div> <!-- end .team-bio-modal-scroll --></div>', '<div class="team-bio-modal" style="display: block;"><div class="team-bio-modal-scroll"><span onclick="document.getElementById(\'modal-wrapper\').style.display=\'none\'" title="Close PopUp" class="bas-close">x</span><div class="team-bio-modal-content"><img src="http://brainstorm.solutions/bas/wp-content/uploads/2017/08/Team_Joe-T.jpg" class="bio-picture"/><div class="team-bio-name"><h4>Joe Toscano</h4><span>CFO</span></div><p>Joe is a graduate of Calumet College with a Bachelor’s Degree in Accounting. Prior to his employment with BAS Joe held various accounting positions with Jays Foods including Central Zone Controller for Borden Snacks Divisions who acquired Jays in 1986.</p><p>Joe joined BAS in 1989 and was initially responsible for operations. He is currently an equity partner and holds the title of CFO responsible for business operations and accounting functions.</p><p class="bio-perspective">Joe’s Perspective: “BAS excels at handling a complex set of client variables through enterprise level solutions delivering on its value proposition.”</p><p>Joe is a husband, father of three daughters, and has two grandchildren. He enjoys golfing, cooking, travel, and spending time with his family. Joe has served on boards of several privately held companies, and currently sits on the Board of Calumet Country Club.</p></div> <!-- end .team-bio-modal-content --></div> <!-- end .team-bio-modal-scroll --></div>', '<div class="team-bio-modal" style="display: block;"><div class="team-bio-modal-scroll"><span onclick="document.getElementById(\'modal-wrapper\').style.display=\'none\'" title="Close PopUp" class="bas-close">x</span><div class="team-bio-modal-content"><img src="http://brainstorm.solutions/bas/wp-content/uploads/2017/08/Team_Marty-J.jpg" class="bio-picture"/><div class="team-bio-name"><h4>M. W. Joseph</h4><span>President</span><br><a href="https://www.linkedin.com/in/marty-joseph-9b21547/" title="View LinkedIn profile" target="_blank">LinkedIn Profile <i class="icon-linkedin"></i></a></div><p>Marty graduated from the University of Illinois Chicago with a Bachelor of Science in Accounting. Previous to joining BAS, Marty worked for Carson Pirie Scott &amp; Company for 6 years in the Accounting Department. In his role as the Audit Manager he supervised a staff of 10 Auditors that performed the following functions: Financial Audits, Operational Audits, System Audits, Construction Audits, Pension Plans, and Medical Benefits. Marty has been with BAS since 1985, and is currently the President.</p><p>Leading the Sales and Marketing efforts of BAS, Marty has grown the company from only administering employee benefit plans to offering a full array of cost management solution services. Marty has developed the organization\'s capabilities to become an industry leader in Third Party Administration.</p><p class="bio-perspective">Marty’s Perspective: “Our organization allows our clients to address the problems of rising health care costs more aggressively while actively engaging their employees in their own health care management.”</p><p>Marty is a husband, and father of two girls. His free time is spent with his family, living a healthy lifestyle through fitness and food. Traveling and experiencing new cultures is high on his list. Marty is an active member and sits on the HM Advisory Board as well as Cigna Payer Solution Board.</p></div> <!-- end .team-bio-modal-content --></div> <!-- end .team-bio-modal-scroll --></div>', '<div class="team-bio-modal" style="display: block;"><div class="team-bio-modal-scroll"><span onclick="document.getElementById(\'modal-wrapper\').style.display=\'none\'" title="Close PopUp" class="bas-close">x</span><div class="team-bio-modal-content"><img src="http://brainstorm.solutions/bas/wp-content/uploads/2017/08/Team_Justin-F.jpg" class="bio-picture"/><div class="team-bio-name"><h4>Justin Forton</h4><span>Vice President Sales Operations</span><br><a href="https://www.linkedin.com/in/justinforton/" title="View LinkedIn profile" target="_blank">LinkedIn Profile <i class="icon-linkedin"></i></a></div><p>Justin has been in the employee benefits industry for over 18 years. Previous to joining BAS, Justin worked for Principal Financial Group, Northwestern Mutual Financial Network (SEBS), and Gallagher Benefit Services. Justin’s expertise in “Client Experience” stems from years of working with employers directly and through broker/consultants. Justin was also the Communications Director &amp; President of the Middle Tennessee Association of Health Underwriters prior to moving to Illinois.</p><p class="bio-perspective">Justin’s Perspective: “As the employer sponsored benefits arena continues to evolve at an unprecedented speed, it is imperative that flexibility, cost savings, and overall client experience are maximized.”</p><p>Justin and his wife currently live in Mokena, IL. His free time is spent with his family and friends enjoying time in the city and traveling out west.</p></div> <!-- end .team-bio-modal-content --></div> <!-- end .team-bio-modal-scroll --></div>', '<div class="team-bio-modal" style="display: block;"><div class="team-bio-modal-scroll"><span onclick="document.getElementById(\'modal-wrapper\').style.display=\'none\'" title="Close PopUp" class="bas-close">x</span><div class="team-bio-modal-content"><img src="http://brainstorm.solutions/bas/wp-content/uploads/2017/08/Team_Tom-K.jpg" class="bio-picture"/><div class="team-bio-name"><h4>Thomas Klupchak</h4><span>Vice President of Sales</span><br><a href="https://www.linkedin.com/in/tom-klupchak-678b8a11/" title="View LinkedIn profile" target="_blank">LinkedIn Profile <i class="icon-linkedin"></i></a></div><p>Tom is a graduate of Dartmouth College class of 1985 with a Bachelor Degree in US History. His career experience includes Senior Sales Representative at Prudential Insurance Company of America, and Vice President of Sales at Benesight from 1994 until 2003. He began his career at BAS in May of 2003 as Vice President of Sales. His territory includes Illinois, Indiana, and Maryland.</p><img src="http://brainstorm.solutions/bas/wp-content/uploads/2017/08/map-thomas.png" class="bio-map"><p>With more than 28 years in the employee benefits industry, Tom is able to offer broker partners and clients a unique perspective on the health care industry. His background on the insurance carrier side, the fully insured market, and the self-funded market support a greater understanding of the business. Tom’s active participation in the evolution of the health care market over the last 28 years has made him an industry expert, and leader on the BAS team.</p><p class="bio-perspective">Tom’s Perspective: “My main objective is to provide my broker partners and their clients with real solutions. This allows employers to offer their employees cost effective health care programs, high quality, and high touch service. If an employer’s benefits program is not “positive” to their employees it loses a tremendous amount of its value. I try to offer my clients the same passion and responsiveness that I brought to my job as a 22 years old right out of college!”</p><p>Tom is a husband and father of three boys. He enjoys spending time with his large, extended family as he is 8th out of 9 children. His immediate family (in addition to his 18 nieces and nephews) get together frequently. Tom’s spare time is spent reading, exercising, and enjoying theater and music. Through his local Catholic Church Tom is part of a Leadership Training Program (LTP) that mentors grade school boys from 4th through 8th grade teaching them it’s “cool to be good”. Tom is also a member of IJP Athletic Board, a basketball coach at IJP, and a baseball coach at HF Park District.</p></div> <!-- end .team-bio-modal-content --></div> <!-- end .team-bio-modal-scroll --></div>', '<div class="team-bio-modal" style="display: block;"><div class="team-bio-modal-scroll"><span onclick="document.getElementById(\'modal-wrapper\').style.display=\'none\'" title="Close PopUp" class="bas-close">x</span><div class="team-bio-modal-content"><img src="http://brainstorm.solutions/bas/wp-content/uploads/2017/08/Team_Elizabeth-T.jpg" class="bio-picture"/><div class="team-bio-name"><h4>Elizabeth Toscano</h4><span>Director of Business Development - Mid Atlantic Region</span><br><a href="https://www.linkedin.com/in/elizabeth-toscano-6a645732/" title="View LinkedIn profile" target="_blank">LinkedIn Profile <i class="icon-linkedin"></i></a></div><p>Elizabeth holds a Bachelor’s Degree in Marketing from Columbia College in Chicago, IL. She started at BAS in 2006 as a Sales and Marketing Representative for small groups. In this role she marketed stop loss and sold a small group product for employer groups of 10-100 employee lives. Soon after she took over the additional responsibility of Wellness Coordinator due to her passion for healthy lifestyles. She was responsible for the design, implementation, and reporting of all activity based and outcome based wellness programs. Her success in this position was proved by positive measurable outcomes.</p><p>Elizabeth is currently a Sales Executive for mid to large size employer groups. Her territory includes IL, MI, PA, NY, NJ, MD and Washington D.C. Her expertise in a wide array of stop loss products, analytics, network and reference based pricing, regulatory compliance and plan design help her accomplish long term cost reduction strategies with her clients.</p><img src="http://brainstorm.solutions/bas/wp-content/uploads/2017/08/map-elizabeth.png" class="bio-map"><p class="bio-perspective">I know I’ve done my job when I can identify a client’s particular needs, and provide the right solution for them. I am dedicated and diligent in applying the latest industry standards along-side our BAS solutions and I strive to provide the best service possible. The most rewarding part of my job is knowing that my clients are satisfied.</p><p>In her free time, Elizabeth enjoys spending time with her family. She loves to cook, and she considers herself an expert in Italian cuisine. Whenever Elizabeth has time for a break you can expect she’s traveling and learning about new cultures, new foods, and living life to the fullest! She is also an active member in both SIIA, and SPBA.</p></div> <!-- end .team-bio-modal-content --></div> <!-- end .team-bio-modal-scroll --></div>', '<div class="team-bio-modal" style="display: block;"><div class="team-bio-modal-scroll"><span onclick="document.getElementById(\'modal-wrapper\').style.display=\'none\'" title="Close PopUp" class="bas-close">x</span><div class="team-bio-modal-content"><img src="http://brainstorm.solutions/bas/wp-content/uploads/2017/08/Team_Jake-N.jpg" class="bio-picture"/><div class="team-bio-name"><h4>Jake Norman</h4><span>Director of Business Development - South Eastern Region</span><br><a href="https://www.linkedin.com/in/jake-norman-b5211b55/" title="View LinkedIn profile" target="_blank">LinkedIn Profile <i class="icon-linkedin"></i></a></div><p>Jake holds a Bachelor of Arts Degree in Communications from Southern Illinois University at Carbondale (SIUC). Jake joined BAS in 2004 as a Sales Executive servicing the Missouri, Southern Illinois, Tennessee, Kentucky, Georgia, and North Carolina territories. Prior to BAS, Jake worked with Express Scripts, Inc. as Sr. Benefits and Consultative Service Analyst.</p><img src="http://brainstorm.solutions/bas/wp-content/uploads/2017/08/map-jake.png" class="bio-map"><p>Jake’s professional skills are focused on cultivating, maintaining, and strengthening strategic broker and client partnerships. With a strong desire to “compete to win”, Jake is a valuable asset to the BAS team. He is able to keep the end goal in sight, while meeting the expectations of his brokers and their clients. Jake is a leader on the BAS sales team and utilizes the full array of BAS products and services to address the challenges of the current health care marketplace.</p><p class="bio-perspective">Jake’s Perspective: “My objective is to explore and successfully execute customized solutions for my clients. This objective is routinely achieved through BAS’ unique ability to implement proven cost containment strategies to meet my client’s specific needs.”</p><p>Jake spends all his free time with his wife and two sons Luke and Leo. The biggest joy in his life is being a Dad, and working hard for his family. As a baseball fan he enjoys spending the day at the ball park supporting the St. Louis Cardinals! Jake is an active member or SIIA, SPBA, and NAHU.</p></div> <!-- end .team-bio-modal-content --></div> <!-- end .team-bio-modal-scroll --></div>', '<div class="team-bio-modal" style="display: block;"><div class="team-bio-modal-scroll"><span onclick="document.getElementById(\'modal-wrapper\').style.display=\'none\'" title="Close PopUp" class="bas-close">x</span><div class="team-bio-modal-content"><img src="http://brainstorm.solutions/bas/wp-content/uploads/2017/08/Team_Shane_D.png" class="bio-picture"/><div class="team-bio-name"><h4>Shane Duffy</h4><span>Director of Business Development - Western Region</span><br><a href="https://www.linkedin.com/in/shane-duffy-bba57618/" title="View LinkedIn profile" target="_blank">LinkedIn Profile <i class="icon-linkedin"></i></a></div><p>Shane holds a Bachelor’s Degree in Finance and Information Technology from Marquette University. Shane joined BAS in 2015 as a Sales Executive servicing the Washington, Oregon, Colorado, Ohio, and Tennessee territories. Prior to BAS, Shane worked at MetLife and Sun Life Financial as an Account Executive selling Dental, Vision, Life and Disability products. Shane started at BAS on the service side learning the implementation process and backroom operations.</p><p class="bio-perspective">Shane\'s Perspective: “The customized level of service that BAS is able to provide is what makes us different from our competition.  Healthcare is a such a large line-item for companies today, they should be able to control the way their benefits are administered for their employees.  Self-funding with a TPA is the most effective way for them to take the reins of their health plan spend and create the experience they want their employees to have.”</p><p>Shane is a proud Evans Scholar alumni and remains passionate about giving back to the Evans Scholar Foundation. In his free time he enjoys spending time with his friends and family, playing golf, and trying different restaurants in Chicago. He is a big fan of both Marquette University and Chicago Bulls basketball.</p></div> <!-- end .team-bio-modal-content --></div> <!-- end .team-bio-modal-scroll --></div>'];

// array that includes [0-6]: bios, total of seven array items
var basMessagesTwo = ['<div class="team-bio-modal" style="display: block;"><div class="team-bio-modal-scroll"><span onclick="document.getElementById(\'modal-wrapper\').style.display=\'none\'" title="Close PopUp" class="bas-close">x</span><div class="team-bio-modal-content"><img src="http://brainstorm.solutions/bas/wp-content/uploads/2017/08/Team_Terri-R.jpg" class="bio-picture"/><div class="team-bio-name"><h4>Terri Raimondi</h4><span>Director of Business Development - MidWest Region</span><br><a href="https://www.linkedin.com/in/terri-raimondi-30b57013/" title="View LinkedIn profile" target="_blank">LinkedIn Profile <i class="icon-linkedin"></i></a></div><p>Terri holds a Bachelor’s Degree from Northern Illinois University. Terri is one of the longest standing employees with 25 years at BAS. Terri started at BAS with the title of Sales and Marketing Account Executive. As she mastered her role as Account Executive she took on a Senior Sales Executive position. Her current territory includes Illinois, Nebraska, Ohio, Texas, Florida, Missouri (KC area).</p><p><img src="http://brainstorm.solutions/bas/wp-content/uploads/2017/08/map-terri.png" class="bio-map"></p><p>Terri’s professional ability to articulate the benefits of a Third Party Administrator to her clients is unmatched. Her cross-departmental knowledge make her a valuable asset to management, and continuous growth of the organization. With industry expertise Terri continues to lead the team in self-funded insurance, and stop loss prevention.</p><p class="bio-perspective">Many companies don’t realize the usable information right at their fingertips! I take pride in educating my clients on their options and possibilities. It’s rewarding to know the client understands the benefits of working with BAS. My goal is to offer as much flexibility, customization, and commitment to each of my groups as I can.</p><p>Terri is a dedicated wife and mother of two children valuing family above all. Any free time is spent taking care of her family and enjoying motherhood. Her dedication to BAS for the last 25 years has contributed to the organization\'s success. Through BAS membership Terri participates in SIIA, and SPBA annual meetings.</p></div> <!-- end .team-bio-modal-content --></div> <!-- end .team-bio-modal-scroll --></div>', '<div class="team-bio-modal" style="display: block;"><div class="team-bio-modal-scroll"><span onclick="document.getElementById(\'modal-wrapper\').style.display=\'none\'" title="Close PopUp" class="bas-close">x</span><div class="team-bio-modal-content"><img src="http://brainstorm.solutions/bas/wp-content/uploads/2017/08/Team_John-C.jpg" class="bio-picture"/><div class="team-bio-name"><h4>John Cooper</h4><span>Director of Business Development</span><br><a href="https://www.linkedin.com/in/john-cooper-86a823b1/" title="View LinkedIn profile" target="_blank">LinkedIn Profile <i class="icon-linkedin"></i></a></div><p>John has been in the Employee Benefits arena since 1993 after attending Boise State University.  Mr Cooper has extensive experience in health insurance having spent 9 years at Meritain Health, an Aetna Company, and as a principal in Brokerage and Benefits TPA in Idaho for 5 years.  Most recently John has been actively involved in building out our ACO “light” product, ADVANTA-Care, targeting hospitals wanting a Community Health Plan.  Mr Cooper’s specific area of expertise is in Group Benefit Captives, ACO’s and 340b prescription programs.</p><p class="bio-perspective">John\'s Perspective: “Healthcare is very personal and begins locally.  Employers today are balancing what is their single largest ongoing expense with what is also their best tool to recruit and retain quality employees.  It is imperative that the employer and broker/consultant have an Administrator who is; Independent, Flexible and has the ability to integrate cost containment solutions that meet the local need of each employee.”</p><p>John presently resides in Boise, Idaho and in his spare time enjoys rafting, golfing and other outdoor activities with his 3 college age children.</p></div> <!-- end .team-bio-modal-content --></div> <!-- end .team-bio-modal-scroll --></div>', '<div class="team-bio-modal" style="display: block;"><div class="team-bio-modal-scroll"><span onclick="document.getElementById(\'modal-wrapper\').style.display=\'none\'" title="Close PopUp" class="bas-close">x</span><div class="team-bio-modal-content"><img src="http://brainstorm.solutions/bas/wp-content/uploads/2017/08/Team_Patti-C.jpg" class="bio-picture"/><div class="team-bio-name"><h4>Patti Cain</h4><span>Director of Management Information Systems (MIS)</span></div><p>Patti received a Bachelor’s degree in Education from Illinois State University. She is our Director of MIS with over 30 years of experience in the healthcare industry. During her 25 years with BAS, she has worn many hats and managed several departments. Her overall role includes the timely and accurate generation and execution of MIS operations and overseeing our claims software system.</p><p>Patti also spends a significant amount of her time programming, testing and incorporating system enhancements. She is heavily involved with all BAS departments providing support, technical expertise and collectively creates strategic processes that will optimize solutions for our clients.</p><p class="bio-perspective">During my employment with BAS, I feel proud being part of the success of BAS. I will continue to diligently pursue both our organizational goals and Client needs through ongoing Education, teamwork and technology.</p><p>Patti is a wife and mother who strongly values her family and good friendships. Her favorite pastime is cheering on The Chicago Blackhawks! Patti supports the Wounded Worrier Project and American Breast Cancer Foundation.</p></div> <!-- end team-bio-modal-content --></div> <!-- end .team-bio-modal-scroll --></div>', '<div class="team-bio-modal" style="display: block;"><div class="team-bio-modal-scroll"><span onclick="document.getElementById(\'modal-wrapper\').style.display=\'none\'" title="Close PopUp" class="bas-close">x</span><div class="team-bio-modal-content"><img src="http://brainstorm.solutions/bas/wp-content/uploads/2017/08/Team_Kyle-B.jpg" class="bio-picture"/><div class="team-bio-name"><h4>Kyle Bersnak</h4><span>Director of Finance and Accounting</span><br><a href="https://www.linkedin.com/in/kyle-bersnak-3b4b764/" title="View LinkedIn profile" target="_blank">LinkedIn Profile <i class="icon-linkedin"></i></a></div><p>Kyle received both his Bachelor’s Degree in Accounting, Finance and Risk Management and Insurance and his MBA from Ohio State University’s Fisher College of Business. Prior to joining BAS, Kyle spent 7+ years in various finance and accounting roles at NetJets, a Berkshire Hathaway Company. His current role at BAS is Director of Finance and Accounting.</p><p>Kyle also worked at Deloitte as an auditor where he passed the CPA exam, and performed financial audits on a wide array of organizations. He began his career working at his father’s independent commercial property and casualty insurance agency.</p><p class="bio-perspective">Kyle’s Perspective: “In my role, I strive to meet our clients’ needs by providing clear, timely information and by delivering excellent external and internal customer service.”</p><p>Kyle is a husband and father of three children. He enjoys spending time with his family, golfing, and rooting for Ohio State’s football and basketball teams.</p></div> <!-- end .team-bio-modal-content --></div>', '<div class="team-bio-modal" style="display: block;"><div class="team-bio-modal-scroll"><span onclick="document.getElementById(\'modal-wrapper\').style.display=\'none\'" title="Close PopUp" class="bas-close">x</span><div class="team-bio-modal-content"><img src="http://brainstorm.solutions/bas/wp-content/uploads/2017/08/Team_Lynn-P.jpg" class="bio-picture"/><div class="team-bio-name"><h4>Lynn Davis</h4><span>Director of Accounting</span><br><a href="https://www.linkedin.com/in/lynn-peppler-80a64a43/" title="View LinkedIn profile" target="_blank">LinkedIn Profile <i class="icon-linkedin"></i></a></div><p>Lynn is the Director of Accounting at BAS. She has over twenty years of experience with the company in the accounting department. Lynn is recognized for developing the department and understanding the needs of a third party administrator. Her technical expertise in accounting along with her management skills make her an asset to BAS.</p><p>Lynn deals with all aspects of Accounting including Claim Funding and Stop Loss. Her attention to detail, strong communication, and organization skills have built a strong department. As a director she has cultivated an environment following consistent processes and principles to meet all client expectations and beyond.</p><p class="bio-perspective">I have seen incredible changes at BAS during my twenty years with the company. My goal has always been to assist clients in their understanding of our procedures and transition to a Third Party environment. BAS strives to provide the best solution in every situation, and maintain the highest industry standards.</p><p>Lynn spends her free time with her family and staying active. She is a wife, and mother of four sons. She is a true advocate of living a healthy lifestyle which includes walking and working out. She’s a Blackhawks fan and enjoys weekend motorcycle rides with her husband.</p></div> <!-- end .team-bio-modal-content --></div>', '<div class="team-bio-modal" style="display: block;"><div class="team-bio-modal-scroll"><span onclick="document.getElementById(\'modal-wrapper\').style.display=\'none\'" title="Close PopUp" class="bas-close">x</span><div class="team-bio-modal-content"><img src="http://brainstorm.solutions/bas/wp-content/uploads/2017/08/Team_John-V.jpg" class="bio-picture"/><div class="team-bio-name"><h4>John Vinopal</h4><span>Director of Stop Loss Underwriting</span><br><a href="https://www.linkedin.com/in/john-vinopal-48046619/" title="View LinkedIn profile" target="_blank">LinkedIn Profile <i class="icon-linkedin"></i></a></div><p>John holds a Bachelor of Arts Degree in Communications from Western Illinois University. With over thirty years of insurance industry expertise, John is the Director of Stop Loss Underwriting for BAS. John has a diverse background in Sales, Client Management and Underwriting, and a strong skill set for coordinating major facets of a client’s benefit program.</p><p>John prides himself in “doing things the correct way, which is not always the easy way”. He contributes consistency and dedication to the BAS team, assisting clients in predicting future costs and negotiating the most competitive stop loss arrangements available.</p><p class="bio-perspective">I have worked with organizations in the past that have struggled in the changing Employee Benefits industry, but BAS is thriving by taking on those challenges, and directing our clients with specific strategy, innovative solutions, and dedicated service.</p><p>John belongs to the Chicago Italian American Charitable Organization (CIACO), The Village Theater Guild (Member and Actor), and volunteers at The United Way, PADS, and Relay for Life. He is also a professional singer, guitarist, and a columnist for the Arlington Almanac in Arlington Heights.</p></div> <!-- end .team-bio-modal-content --></div>', '<div class="team-bio-modal" style="display: block;"><div class="team-bio-modal-scroll"><span onclick="document.getElementById(\'modal-wrapper\').style.display=\'none\'" title="Close PopUp" class="bas-close">x</span><div class="team-bio-modal-content"><img src="http://brainstorm.solutions/bas/wp-content/uploads/2017/08/Team_Tracy-W.jpg" class="bio-picture"/><p style="text-align:center;">Bio for Tracey coming soon.</p><br><br><a href="https://www.linkedin.com/in/tracey-wells-b6991b104/" title="View LinkedIn profile" target="_blank">LinkedIn Profile <i class="icon-linkedin"></i></a></div> <!-- end .team-bio-modal-content --></div> <!-- end .team-bio-modal-scroll --></div>'];