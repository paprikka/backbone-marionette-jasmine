<div class="user-tools">
  <span class="user-remove-btn"><i class="icon-close"></i></span>
  <a href="#!/users/edit/{{id}}" class="user-edit-btn"><i class="icon-wrench"></i></a>
  <a href="#!/users/get/{{id}}" class="user-show-btn"><i class="icon-arrow-right"></i></a>
  
</div>
<div class="user-avatar-wrapper">
  {{#if avatarUrl}}
  <img src="{{{avatarUrl}}}" width="60" height="60" alt="{{fullName}}">
  {{else}}
  <span class="user-avatar-placeholder">{{initials}}</span>
  {{/if}}
</div>
<div class="user-desc">
  <a href="#!/users/get/{{id}}">{{firstName}} {{lastName}}</a>  
</div>