// on read more adding contents

const dynamicContent = `
            <div class="bars">
              <div class="info">
                <span>BOOTSTRAP</span>
                <span>80%</span>
              </div>
            </div>
            <div class="line bootstrap"></div>

            <div class="bars">
              <div class="info">
                <span>SASS</span>
                <span>85%</span>
              </div>
            </div>
            <div class="line sass"></div>

            <div class="bars">
              <div class="info">
                <span>JQUERY</span>
                <span>70%</span>
              </div>
            </div>
            <div class="line jquery"></div>

            <div class="bars">
              <div class="info">
                <span>MongoDB</span>
                <span>45%</span>
              </div>
            </div>
            <div class="line mongodb"></div>

            <div class="bars">
              <div class="info">
                <span>LARAVEL</span>
                <span>55%</span>
              </div>
            </div>
            <div class="line laravel"></div>

            <div class="bars">
              <div class="info">
                <span>GIT</span>
                <span>85%</span>
              </div>
            </div>
            <div class="line git"></div>

            <div class="bars">
              <div class="info">
                <span>GITHUB</span>
                <span>65%</span>
              </div>
            </div>
            <div class="line github"></div>`;
const paraContent = `
<br>
<br>
<h2>Certifications </h2>
The web developer Bootcamp  <h4>Udemy </h4>
<br>
<h2>Work experience </h2>
Intern at <b>'Lets Grow More'<b> - (sept 2022).
<br>
<br>
<h2>Projects</h2>
<ul>
<li>Calculator</li>
<li>Todo list application</li>
<li>Stopwatch</li>
<li>Sticky Notes</li>
<li>Stone Paper Scissor Game</li>
<li>Contact Forms</li>
</ul>
`;
let counter = 1;
$("#readMore").click(function () {
  counter++;
  if (counter == 2) {
    $(".skills .column.right").append(dynamicContent);
    $(".skills p").append(paraContent);
  } else {
  }
});
