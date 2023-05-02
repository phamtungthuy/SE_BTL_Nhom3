'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Paragraphs', [{
      content: "The sky is blue and the sun is shining. I love walking in the park and feeling the cool breeze. The birds are chirping and the leaves are rustling in the wind. It's so peaceful here. I often come to this park to relax and clear my mind. I like to watch the children playing and the dogs running around. It makes me happy to see them enjoying themselves. I think everyone should take some time to enjoy nature and all it has to offer. It's good for the soul.",
      difficulty: 'beginner',
      language: 'English',
      is_test: false,
    }, {
      content: 'Trong cuộc sống, chúng ta thường xuyên phải đối mặt với những thử thách và khó khăn. Đôi khi, chúng ta cảm thấy mệt mỏi và chán nản, nhưng điều quan trọng là phải tiếp tục đấu tranh và không bỏ cuộc. Để vượt qua những thử thách này, chúng ta cần có sự kiên trì và nghị lực. Chúng ta cũng cần phải học cách tự tin và tự yêu mình, bởi chỉ khi ta tin tưởng vào bản thân thì mới có thể vượt qua được mọi khó khăn. Ngoài ra, chúng ta cũng cần phải có sự đoàn kết và hỗ trợ lẫn nhau, bởi những thành công đều đến từ những nỗ lực của cả một đội ngũ. Cuối cùng, chúng ta cần phải nhớ rằng, thất bại không phải là thất bại khi chúng ta cố gắng và học hỏi từ nó. Hãy luôn cố gắng và không ngừng học hỏi để trở nên mạnh mẽ hơn trong cuộc sống.',
      difficulty: 'intermediate',
      language: 'Vietnamese',
      is_test: false
    }, {
      content: 'Chuyện xảy ra vào một trưa nắng đẹp, khi tôi đi dạo quanh phố xá vắng vẻ. Trong lúc ngắm nhìn bầu trời xanh thăm thẳm, tôi đột nhiên bị thu hút bởi một bức tường rêu phong phủ đầy những hình khối khó hiểu. Tôi liền tiến tới và cố gắng tìm hiểu sự phức tạp của nó, nhưng thật không dễ dàng. Các mảng màu tím, xanh và đỏ trông như những bản đồ kỹ thuật số được xếp chồng lên nhau, tạo ra một hình ảnh khó hiểu nhưng vẫn đầy sức mạnh và nghệ thuật. Tôi không thể rời mắt khỏi bức tường này, nhưng càng nhìn càng thấy khó chịu và mệt mỏi. Cuối cùng, tôi quyết định rời khỏi đó và về nhà để nghỉ ngơi.',
      difficulty: 'advanced',
      language: 'Vietnamese',
      is_test: false
    }], {});
  },

  async down (queryInterface, Sequelize) {

    return queryInterface.bulkDelete('Paragraphs', null, {});
  }
};
