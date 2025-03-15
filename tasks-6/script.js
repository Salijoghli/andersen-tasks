class DataHandler {
  #posts = [];
  async fetchPosts() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) throw new Error("Error fetching posts");
      this.#posts = await response.json();
    } catch (error) {
      console.error("Error fetching posts", error);
    }
  }
  listPosts() {
    return this.#posts
      ? [...this.#posts].sort((a, b) => a.title.localeCompare(b.title))
      : [];
  }
  getPost(id) {
    return this.#posts ? [...this.#posts].find((post) => post.id === id) : null;
  }
  clearPosts() {
    this.#posts = [];
  }
}

const posts = new DataHandler();

posts.fetchPosts().then(() => {
  console.log(posts.listPosts());
});
