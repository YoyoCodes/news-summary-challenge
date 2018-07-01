var NEWSMODULE= (function(exports) {
  function News(title, url, summary, thumbnail) {
    this.title = title;
    this.url = url;
    this.summary = summary;
    this.thumbnail = thumbnail;
  };
  exports.News = News;
  return exports;
})(this);
