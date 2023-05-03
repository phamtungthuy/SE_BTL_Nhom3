'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Paragraphs', [{
      content: "The sky is blue and the sun is shining. I love walking in the park and feeling the cool breeze. The birds are chirping and the leaves are rustling in the wind. It's so peaceful here. I often come to this park to relax and clear my mind. I like to watch the children playing and the dogs running around. It makes me happy to see them enjoying themselves. I think everyone should take some time to enjoy nature and all it has to offer. It's good for the soul.",
      difficulty: 'Beginner',
      language: 'English',
      is_test: false,
    }, {
      content: "Từ xưa đến nay, dân tộc Việt Nam luôn coi trọng ngôn ngữ của mình - tiếng Việt. Chúng ta có thể tự hào mà khẳng định rằng tiếng Việt là một thứ tiếng đẹp. Tiếng Việt nước ta rất giàu và đẹp. Nó là thứ tiếng hài hòa về âm hưởng, thanh điệu. Bởi vậy, tiếng Việt có đầy đủ khả năng truyền tải tư tưởng, tình cảm của người Việt Nam nhằm đáp ứng nhu cầu trong đời sống người Việt. Nó là thứ tiếng giàu chất nhạc bởi nó là thứ tiếng giàu thanh điệu. Từ vựng tiếng Việt qua các thời kì diễn biến tăng lên nhiều, ngữ pháp uyển chuyển và chính xác hơn. Bởi vậy, con người Việt Nam hôm nay cần biết gìn giữ và phát huy sự trong sáng, giàu đẹp của tiếng Việt.",
      difficulty: 'Beginner',
            language: 'Vietnamese',
            is_test: false,
    },{
      content: 'Trong cuộc sống, chúng ta thường xuyên phải đối mặt với những thử thách và khó khăn. Đôi khi, chúng ta cảm thấy mệt mỏi và chán nản, nhưng điều quan trọng là phải tiếp tục đấu tranh và không bỏ cuộc. Để vượt qua những thử thách này, chúng ta cần có sự kiên trì và nghị lực. Chúng ta cũng cần phải học cách tự tin và tự yêu mình, bởi chỉ khi ta tin tưởng vào bản thân thì mới có thể vượt qua được mọi khó khăn. Ngoài ra, chúng ta cũng cần phải có sự đoàn kết và hỗ trợ lẫn nhau, bởi những thành công đều đến từ những nỗ lực của cả một đội ngũ. Cuối cùng, chúng ta cần phải nhớ rằng, thất bại không phải là thất bại khi chúng ta cố gắng và học hỏi từ nó. Hãy luôn cố gắng và không ngừng học hỏi để trở nên mạnh mẽ hơn trong cuộc sống.',
      difficulty: 'Intermediate',
      language: 'Vietnamese',
      is_test: false
    }, {
        content: "The Khao San Road was a famous traveller spot even before Leonardo di Caprio's character in the film The Beach stayed there. But it's noisy, not very pretty and not very Thai. For something more authentic, Phra Kanong offers an alternative place to stay, with its fantastic street markets where everyday Bangkok people eat, work and live. It's not as convenient for the main tourist sites, but it has a Skytrain station so you can be at the Grand Palace in 20 minutes.",
        difficulty: 'Intermediate',
        language: 'English',
        is_test: false
    }, {
      content: "while the majority of texts in this resource are at CEF levels C1,  a few are harder (level C2) and a few are easier (level B2). All the texts in this collection are written in normal English; however in order to maximize their language  teaching potential, most have been specifically written for students of English as a foreign or second language, or else for high school students. Texts are accompanied by advanced reading comprehension worksheets designed to prepare students for the Cambridge Advanced English (C1) certification or for the international  TOEFL or TOEIC tests. Printable reading texts: most pages are printer-friendly and will print directly as well as, or better than, PDF versions.",
      difficulty: 'Advanced',
        language: 'English',
            is_test: false
    },{
      content: 'Chuyện xảy ra vào một trưa nắng đẹp, khi tôi đi dạo quanh phố xá vắng vẻ. Trong lúc ngắm nhìn bầu trời xanh thăm thẳm, tôi đột nhiên bị thu hút bởi một bức tường rêu phong phủ đầy những hình khối khó hiểu. Tôi liền tiến tới và cố gắng tìm hiểu sự phức tạp của nó, nhưng thật không dễ dàng. Các mảng màu tím, xanh và đỏ trông như những bản đồ kỹ thuật số được xếp chồng lên nhau, tạo ra một hình ảnh khó hiểu nhưng vẫn đầy sức mạnh và nghệ thuật. Tôi không thể rời mắt khỏi bức tường này, nhưng càng nhìn càng thấy khó chịu và mệt mỏi. Cuối cùng, tôi quyết định rời khỏi đó và về nhà để nghỉ ngơi.',
      difficulty: 'Advanced',
      language: 'Vietnamese',
      is_test: false
    }], {});
  },

  async down (queryInterface, Sequelize) {

    return queryInterface.bulkDelete('Paragraphs', null, {});
  }
};
