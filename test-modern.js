class ModernTestPlugin extends Script {
  constructor() {
    super();
    this.name = "تجربة CloudStream 4.5+";
    this.lang = "ar";
    this.apiKey = "test"; // اختياري
  }

  async search(query, page = 1) {
    // نعيد نتيجة تجريبية — لا حاجة لطلب خارجي
    return [
      {
        name: "فيلم تجريبي - CloudStream 4.5+",
        url: "/video/test",
        posterUrl: "https://via.placeholder.com/300x450/1E90FF/FFFFFF?text=يعمل!",
        quality: "HD",
        type: "Movie"
      }
    ];
  }

  async getSources(url) {
    // نعيد مصدر فيديو حقيقي (مجاني من archive.org)
    return [
      {
        url: "https://archive.org/download/ElephantsDream/ed_hd.mp4",
        quality: "720p",
        isM3u8: false
      }
    ];
  }

  async getSubtitles(url) {
    // لا ترجمة في هذا المثال
    return [];
  }
}
