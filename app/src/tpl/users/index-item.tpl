<div class="user-avatar-wrapper">
  {{#if avatarUrl}}
  <img src="avatarUrl" alt="{{fullName}}">
  {{else}}
  <span class="user-avatar-placeholder">{{initials}}</span>
  {{/if}}
</div>
<div class="user-desc">
  <a href="#!/users/get/{{id}}">{{firstName}} {{lastName}}</a>  
</div>
