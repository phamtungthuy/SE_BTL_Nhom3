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
    }, {
      content: 'Đối với mỗi con người Việt Nam, tiếng Việt không chỉ là một ngôn ngữ để giao tiếp mà còn là chứa đựng hồn cốt của dân tộc. Đó là một thứ tiếng giàu và đẹp. Sự giàu đẹp của tiếng Việt được thể ở ba mặt ngữ âm, từ vựng và ngữ pháp. Thứ tiếng này còn có một hệ thống nguyên âm, phụ âm phong phú. Các vốn từ ngữ qua các thời kỳ ngày một tăng lên, còn ngữ pháp thì trở nên uyển chuyển. Không chỉ vậy, thứ tiếng này có khả năng diễn đạt trọn vẹn tình cảm, tư tưởng của người Việt Nam. Điều này khiến tôi cảm thấy thêm trân trọng ngôn ngữ của dân tộc mình hơn. Mỗi người hãy tiếp tục giữ gìn sự trong sáng, giàu đẹp của tiếng Việt.',
      difficulty: 'Beginner',
      language: 'Vietnamese',
      is_test: true
    }, {
      content: 'Có lẽ cần phải trải qua tuổi thanh xuân mới có thể hiểu được tuổi xuân là khoảng thời gian ta sống ích kỷ biết chừng nào. Có lúc nghĩ, sở dĩ tình yêu cần phải đi một vòng tròn lớn như vậy, phải trả một cái giá quá đắt như thế, là bởi vì nó đến không đúng thời điểm. Khi có được tình yêu, chúng ta thiếu đi trí tuệ. Đợi đến khi có đủ trí tuệ, chúng ta đã không còn sức lực để yêu một tình yêu thuần khiết nữa.',
      difficulty: 'Intermediate',
      language: 'Vietnamese',
      is_test: true
    }, {
      content: 'Mỗi người đều có cách sống của riêng mình, chúng ta không cần phải ngưỡng mộ cuộc sống của người khác. Có người ngoài mặt tươi cười rạng rỡ nhưng ẩn trong đó là bao giọt nước mắt, lại có người nhìn có vẻ cơ cực nhưng kỳ thực họ lại đang trải qua một cuộc sống rất thoải mái. Hạnh phúc không có một đáp án chuẩn mực, niềm vui cũng không chỉ xuất phát từ một con đường.Thu lại ánh mắt ngưỡng mộ người khác và nhìn lại tâm hồn mình. Sống cuộc sống mình mong muốn chính là những ngày tháng tươi đẹp nhất, cách sống mà mình muốn mới chính là cách sống tốt nhất.',
      difficulty: 'Advanced',
      language: 'Vietnamese',
      is_test: true
    }, {
      content: 'After summer comes the rainy season. It lasts from mid-June to the end of September. During this time of year, the sky is cloudy. It drizzles and rains cats and dogs sometimes. Rains provide relief from the oppressive summer heat. Green leaves are developed by the tree. Ponds and rivers are full of water. Monsoon is a boon for farmers. Rainwater softens the soil and makes it suitable for cultivation. Monsoon has some disadvantages. Due to heavy and incessant rainfall, the roads, especially in villages, become muddy.',
      difficulty: 'Beginner',
      language: 'English',
      is_test: true
    }, {
      content: 'In a rapidly changing world, the fate of the country can be shaped by our ability to harness modern science and technology, which is a path to boosting the country’s development programmes. Rapid technological advances have reduced reliance on natural resources or factors related to them. Man is being performed precisely by machines, with regular improvements in his work as a result of rapid technological changes brought about by scientific advancement all over the world. We have made the desired scientific and technological progress and have been successful in boosting various important international activities such as information and telecommunication, television, meteorological services, medical advancement, industrial development, nuclear research, Space Research Oceanographic Research, and so on.',
      difficulty: 'Intermediate',
      language: 'English',
      is_test: true
    }, {
      content: 'You probably already know that it is important to have a king-size breakfast every morning. do you know why Your body is hungry in the morning because you haven’t eaten for about 8-10 hours? Breakfast is therefore the first meal of the day, and therefore, the most important. Imagine driving without fuel; This is exactly how your body feels without fuel from a nutritious breakfast. Nowadays many people skip breakfast to lose weight. Nutritionists are alarmed by this trend, as it is mandatory to eat breakfast within two hours of waking up. Depriving the body of energy can lead to serious health problems in the long run. Forget silly celebrities and their absurd ways to lose weight. Never miss breakfast!',
      difficulty: 'Advanced',
      language: 'English',
      is_test: true
    }], {});
  },

  async down (queryInterface, Sequelize) {

    return queryInterface.bulkDelete('Paragraphs', null, {});
  }
};
