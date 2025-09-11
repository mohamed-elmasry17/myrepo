// اسم الملف: shahid.js
class Shahid extends Script {
  constructor() {
    super();
    this.name = "Shahid (مجاني)";
    this.lang = "ar";
    this.baseUrl = "https://shahid.mbc.net";
  }

  async search(query) {
    const res = await this.request(`/ar/search?query=${encodeURIComponent(query)}`);
    const soup = this.parseHTML(res);
    const items = soup.querySelectorAll(".show-card");
    const results = [];
    items.forEach(item => {
      const title = item.querySelector(".title").innerText;
      const link = this.baseUrl + item.querySelector("a").getAttribute("href");
      const img = item.querySelector("img").src;
      results.push({ title, url: link, img });
    });
    return results;
  }

  async getVideos(url) {
    // Shahid الرسمي يحتاج حساب VIP للتشغيل — هذه النسخة تعرض فقط
    return [{ url: url, name: "شاهد على الموقع الرسمي" }];
  }
}
