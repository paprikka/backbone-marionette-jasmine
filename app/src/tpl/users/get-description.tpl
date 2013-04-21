<div class="single-user-icon">
  {{#if avatarUrl}}
  <img src="{{{avatarUrl}}}" alt="{{fullName}}" class="single-user-avatar" width="320" height="320">
  {{else}}
  <div class="single-user-avatar-placeholder" width="320" height="320">{{initials}}</div>
  {{/if}}
</div>
<div class="single-user-content">
  <h3 class="single-user-name">{{fullName}}</h3>

  <section class="single-user-section">
    <h4 class="single-user-content-title">General</h4>
    <dl class="single-user-general">
      <dt>Current job position</dt>
      <dd>{{#if currentPosition}}{{currentPosition}}{{else}}No data available.{{/if}}</dd>
      <dt>Description</dt>
      <dd>{{#if description}}{{description}}{{else}}No data available.{{/if}}</dd>
    </dl>

  </section>  
  <section class="single-user-section">
    <h4 class="single-user-content-title">Contact</h4>
    {{#if hasContactInfo}}
    <ul class="single-user-contact">
      {{#if phone}}<li><a class="single-user-contact-link" href="call:{{phone}}"><i class="icon-phone"></i> {{phone}}</a></li>{{/if}}
      {{#if email}}<li><a class="single-user-contact-link" href="mailto:{{email}}"><i class="icon-envelop"></i> {{email}}</a></li>{{/if}}
      {{#if twitterHandle}}<li><a class="single-user-contact-link" href="http://twitter.com/{{twitterHandle}}" target="_blank"><i class="icon-twitter"></i> {{twitterHandle}}</a></li>{{/if}}
    </ul>
    {{else}}
    <p class="alert-info">No data available.</p>
    {{/if}}
  </section>
</div>
