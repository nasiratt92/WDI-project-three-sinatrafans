function ngSoundcloud() {
  return {
    restrict: 'E', // Element type
    link($scope, $element, attributes) {
      // Vanilla javascript from here!
      const el = $element[0];
      const iframe = document.createElement('iframe');
      el.append(iframe);
      const baseUrl = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks';
      const url = `${baseUrl}/${attributes.soundcloudId}&amp;color=0066cc`;
      iframe.setAttribute('src', url);
    }
  };
}
/* <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/259153771&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe> */

export default ngSoundcloud;
