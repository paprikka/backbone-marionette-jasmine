<div class="single-user-icon">
  {{#if avatarUrl}}
  <img src="{{{avatarUrl}}}" alt="{{fullName}}" class="single-user-avatar" width="320" height="320">
  {{else}}
  <img src="http://placehold.it/320x320&text={{fullName}}}" alt="{{fullName}}" class="single-user-avatar" width="320" height="320">
  {{/if}}
</div>
<div class="single-user-content">
  <h3 class="single-user-name">{{fullName}}</h3>

  <section class="single-user-section">
    <h4 class="single-user-content-title">General</h4>
    <dl class="single-user-general">
      <dt>Current job position</dt>
      <dd>{{currentPosition}}</dd>
      <dt>Description</dt>
      <dd>{{description}}</dd>
    </dl>

  </section>  
  <section class="single-user-section">
    <h4 class="single-user-content-title">Contact</h4>
    <ul class="single-user-contact">
      <li><a class="single-user-contact-link" href="call:{{phone}}"><i class="icon-phone"></i> {{phone}}</a></li>
      <li><a class="single-user-contact-link" href="mailto:{{email}}"><i class="icon-envelop"></i> {{email}}</a></li>
      <li><a class="single-user-contact-link" href="http://twitter.com/{{twitterHandle}}" target="_blank"><i class="icon-twitter"></i> {{twitterHandle}}</a></li>
    </ul>
  </section>
</div>
