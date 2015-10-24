(function() {


  function TimelineCtrl() {

    this.jobs = [
      {
        type: 'work',
        companyName: 'Priceline.com',
        companyImg: '../assets/priceline.png',
        dates: 'Sep 2014 - Present',
        title: 'Mobile Web Engineer',
        description: [
        'Collaborated with team to transition old code stack based in jQuery to new stack in AngularJS.',
        'Implemented several new designs and features through HTML, SCSS, and JavaScript.',
        'Built an internal tool as a chrome extension to manipulate the browser\'s url, and allow for easy transition between A/B tests.',
        'Worked in an agile environment with bi-weekly sprints, and daily stand-ups that stressed flexibility, and ability to easily adjust.'
        ]
      },
      {
        type: 'work',
        companyName: 'Dev Bootcamp',
        companyImg: '../assets/dbc.png',
        dates: 'Jul 2014 - Sep 2014',
        title: 'Coach',
        description: [
          'Provided assistance and support to current students with the goal of raising their understanding in the various languages and concepts taught including Ruby, Rails, JavaScript, HTML, CSS, and more.',
          'Assisted Dev Bootcamp teachers in giving lectures, and presentations.',
          'Pair programmed with students to guide them through unique difficulties and challenges.'
        ]
      },
      {
        type: 'work',
        companyName: 'HUEMOR',
        companyImg: '../assets/huemor.png',
        dates: 'Jul 2014 - Sep 2014',
        title: 'Web Development Intern',
        description: [
          'Built mobile responsive web pages by utilizing HTML5, CSS3, LESS and Twitter Bootstrap.',
          'Implemented JavaScript and jQuery to add interactive page elements and special web features.'
        ]
      },
      {
        type: 'school',
        companyName: 'Dev Bootcamp',
        companyImg: '../assets/dbc.png',
        dates: 'Mar 2014 - May 2014',
        title: 'Student',
        description: [
          'Dev Bootcamp is a 21-week (12 off-site, 9 on-site) intensive training program for web developers, specializing in Ruby and Rails. I graduated in May 2014.',
          'With over a thousand hours in coding between the 9 weeks at Dev Bootcamp, and the 12 week prep period, I built a fluency in Ruby, Javascript, SQL, HTML, and CSS with an emphasis on web application structure and design.',
          'Through pair programming and several group projects that produced functional web applications, I learned the values of team communication, test driven development, and version control.',
          'By having Engineering Empathy integrated throughout the program I learned the "soft" skills associated with becoming a great developer including respect, compassion, management, and acknowledgment of different experiences.'
        ]
      },
      {
        type: 'work',
        companyName: 'Foot Locker',
        companyImg: '../assets/footlocker.png',
        dates: 'Sep 2013 - Mar 2014',
        title: 'Manager of Loyalty/CRM & Research',
        description: [
          'Provided executive management with ongoing market share analysis and sales volume reports identifying monthly, quarterly and annual trends.',
          'Created and automated new loyalty program reports distributed to all District Managers and Regional Vice Presidents weekly.',
          'Worked with team to develop and execute store associate incentive contest to increase loyalty transaction capture rate.',
          'Developed and distributed weekly newsletter highlighting key industry trends and stories.'
        ]
      },
      {
        type: 'work',
        companyName: 'The NPD Group',
        companyImg: '../assets/npd.png',
        dates: 'Jan 2013 - Sep 2013',
        title: 'Account Specialist',
        description: [
          'Provided executive management with ongoing market share analysis and sales volume reports identifying monthly, quarterly and annual trends.',
          'Created and automated new loyalty program reports distributed to all District Managers and Regional Vice Presidents weekly.',
          'Worked with team to develop and execute store associate incentive contest to increase loyalty transaction capture rate.',
          'Developed and distributed weekly newsletter highlighting key industry trends and stories.'
        ]
      },
      {
        type: 'work',
        companyName: 'The NPD Group',
        companyImg: '/../assets/npd.png',
        dates: 'Jun 2011 - Dec 2012',
        title: 'Operations Associate',
        description: [
          'Provided executive management with ongoing market share analysis and sales volume reports identifying monthly, quarterly and annual trends.',
          'Created and automated new loyalty program reports distributed to all District Managers and Regional Vice Presidents weekly.',
          'Worked with team to develop and execute store associate incentive contest to increase loyalty transaction capture rate.',
          'Developed and distributed weekly newsletter highlighting key industry trends and stories.'
        ]
      },
      {
        type: 'school',
        companyName: 'University of Delaware',
        companyImg: '../assets/ud.png',
        dates: 'Aug 2007 - May 2011',
        title: 'Student',
        description: [
          'Bachelor of Science in Marketing',
          'Bachelor of Science in Operations Management',
          'Minor: Management Information Systems',
          'Dean’s List: 7 of 8 semesters'
        ]
      },
    ];

  }

  angular
    .module('JekyllApp', [])
    .controller('TimelineCtrl', TimelineCtrl);

})();