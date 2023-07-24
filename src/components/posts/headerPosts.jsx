function headerPosts() {
  console.log('HeaderPosts.jsx');

  return (
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
          لیست مقالات
        </h1>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
        در اینجا لیست کلیه مقالاتی که درباره برنامه نویسی و تکنولوژی ایجاد می
        گردد را نمایش داده میشود.
      </p>
    </div>
  );
}

export default headerPosts;
