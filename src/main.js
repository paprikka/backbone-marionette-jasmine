define(function (require) {
  var App = require('src/application');
  var $ = require('jquery');
  // personally, I prefer lodash, which is a faster, well tested underscore alternative
  var _ = require('underscore');

  // For presentation purposes only:
  $(function() {
    var exampleData = {"UserModel":"9b9a6e7a-91f1-68e4-e315-17846b1bfc7b,65e4ca76-85be-9a8a-a373-cc39c80b584b,2d883b03-084b-13b8-4d80-6d781b2cebc0,daa71b24-2862-5f04-7cb7-2a644e0f8881","UserModel-2d883b03-084b-13b8-4d80-6d781b2cebc0":"{\"firstName\":\"John\",\"lastName\":\"Doe\",\"id\":\"2d883b03-084b-13b8-4d80-6d781b2cebc0\",\"fullName\":\"John Doe\",\"initials\":\"JD\"}","UserModel-65e4ca76-85be-9a8a-a373-cc39c80b584b":"{\"firstName\":\"Rafal\",\"lastName\":\"Pastuszak\",\"twitterHandle\":\"paprikkaStudio\",\"avatarUrl\":\"/files/1.png\",\"phone\":\"+43505164772\",\"email\":\"rafal@paprikka.pl\",\"currentPosition\":\"designer, front-end developer\",\"description\":\"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.\",\"id\":\"65e4ca76-85be-9a8a-a373-cc39c80b584b\",\"fullName\":\"Rafal Pastuszak\",\"initials\":\"RP\"}","UserModel-9b9a6e7a-91f1-68e4-e315-17846b1bfc7b":"{\"firstName\":\"Rafal\",\"lastName\":\"Pastuszak\",\"twitterHandle\":\"paprikkaStudio\",\"avatarUrl\":\"/files/1.png\",\"phone\":\"+43505164772\",\"email\":\"rafal@paprikka.pl\",\"currentPosition\":\"designer, front-end developer\",\"description\":\"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.\",\"id\":\"9b9a6e7a-91f1-68e4-e315-17846b1bfc7b\",\"fullName\":\"Rafal Pastuszak\",\"initials\":\"RP\"}","UserModel-daa71b24-2862-5f04-7cb7-2a644e0f8881":"{\"firstName\":\"Rafal\",\"lastName\":\"Pastuszak\",\"twitterHandle\":\"paprikkaStudio\",\"avatarUrl\":\"/files/1.png\",\"phone\":\"+43505164772\",\"email\":\"rafal@paprikka.pl\",\"currentPosition\":\"designer, front-end developer\",\"description\":\"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.\",\"id\":\"daa71b24-2862-5f04-7cb7-2a644e0f8881\",\"fullName\":\"Rafal Pastuszak\",\"initials\":\"RP\"}","UsersCollection":"9229ef77-f67c-ced6-f66f-498381e7a880,02e6835e-7d1d-33f0-8aaf-b5a331857fd3,fd763933-658c-2fd7-a840-a287029fb5d1,6219a21a-ae73-2edc-9cc9-eff068bdc44a,1f8e344f-e76d-ced4-b10a-88cbfd272917,f1ee10aa-d1e4-9cf9-916e-84277a7d34ec,4a5ba97a-a1f4-ca8f-35be-ca9070cc73a5,c8a7b2d4-10bf-f47a-9934-1930419d1cac,02dd68be-4caa-397d-c475-3989979f9f61,781e6896-9f69-46a4-8bfc-9407439e12c6,200fb353-9869-f031-f866-03a56ff4a2f0,6f3ddada-c1a0-765e-c416-b580260a092d,a8031acd-b49e-28bd-b3bf-b1948a49fcf3,6e1a53c7-aa6a-364d-d651-8fc525f30001,401f4b88-87cf-2c1e-b252-c988e5a85090,a077c3f4-c96f-6f02-1902-26b5f667034b","UsersCollection-02dd68be-4caa-397d-c475-3989979f9f61":"{\"firstName\":\"John\",\"lastName\":\"Doe\",\"id\":\"02dd68be-4caa-397d-c475-3989979f9f61\",\"fullName\":\"John Doe\",\"initials\":\"JD\"}","UsersCollection-02e6835e-7d1d-33f0-8aaf-b5a331857fd3":"{\"firstName\":\"John\",\"lastName\":\"Doe\",\"id\":\"02e6835e-7d1d-33f0-8aaf-b5a331857fd3\",\"fullName\":\"John Doe\",\"initials\":\"JD\"}","UsersCollection-1f8e344f-e76d-ced4-b10a-88cbfd272917":"{\"firstName\":\"John\",\"lastName\":\"Doe\",\"id\":\"1f8e344f-e76d-ced4-b10a-88cbfd272917\",\"fullName\":\"John Doe\",\"initials\":\"JD\"}","UsersCollection-200fb353-9869-f031-f866-03a56ff4a2f0":"{\"firstName\":\"John\",\"lastName\":\"Doe\",\"id\":\"200fb353-9869-f031-f866-03a56ff4a2f0\",\"fullName\":\"John Doe\",\"initials\":\"JD\"}","UsersCollection-401f4b88-87cf-2c1e-b252-c988e5a85090":"{\"firstName\":\"Rafal\",\"lastName\":\"Pastuszak\",\"twitterHandle\":\"paprikkaStudio\",\"avatarUrl\":\"/files/1.png\",\"phone\":\"+43505164772\",\"email\":\"rafal@paprikka.pl\",\"currentPosition\":\"designer, front-end developer\",\"description\":\"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.\",\"id\":\"401f4b88-87cf-2c1e-b252-c988e5a85090\",\"fullName\":\"Rafal Pastuszak\",\"initials\":\"RP\"}","UsersCollection-4a5ba97a-a1f4-ca8f-35be-ca9070cc73a5":"{\"firstName\":\"John\",\"lastName\":\"Doe\",\"id\":\"4a5ba97a-a1f4-ca8f-35be-ca9070cc73a5\",\"fullName\":\"John Doe\",\"initials\":\"JD\"}","UsersCollection-6219a21a-ae73-2edc-9cc9-eff068bdc44a":"{\"firstName\":\"John\",\"lastName\":\"Doe\",\"id\":\"6219a21a-ae73-2edc-9cc9-eff068bdc44a\",\"fullName\":\"John Doe\",\"initials\":\"JD\"}","UsersCollection-6e1a53c7-aa6a-364d-d651-8fc525f30001":"{\"firstName\":\"Rafal\",\"lastName\":\"Pastuszak\",\"twitterHandle\":\"paprikkaStudio\",\"avatarUrl\":\"/files/1.png\",\"phone\":\"+43505164772\",\"email\":\"rafal@paprikka.pl\",\"currentPosition\":\"designer, front-end developer\",\"description\":\"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.\",\"id\":\"6e1a53c7-aa6a-364d-d651-8fc525f30001\",\"fullName\":\"Rafal Pastuszak\",\"initials\":\"RP\"}","UsersCollection-6f3ddada-c1a0-765e-c416-b580260a092d":"{\"firstName\":\"John\",\"lastName\":\"Doe\",\"id\":\"6f3ddada-c1a0-765e-c416-b580260a092d\",\"fullName\":\"John Doe\",\"initials\":\"JD\"}","UsersCollection-781e6896-9f69-46a4-8bfc-9407439e12c6":"{\"firstName\":\"John\",\"lastName\":\"Doe\",\"id\":\"781e6896-9f69-46a4-8bfc-9407439e12c6\",\"fullName\":\"John Doe\",\"initials\":\"JD\"}","UsersCollection-9229ef77-f67c-ced6-f66f-498381e7a880":"{\"firstName\":\"Rafal\",\"lastName\":\"Pastuszak\",\"twitterHandle\":\"paprikkaStudio\",\"avatarUrl\":\"/files/1.png\",\"phone\":\"+43505164772\",\"email\":\"rafal@paprikka.pl\",\"currentPosition\":\"designer, front-end developer\",\"description\":\"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.\",\"id\":\"9229ef77-f67c-ced6-f66f-498381e7a880\",\"fullName\":\"Rafal Pastuszak\",\"initials\":\"RP\"}","UsersCollection-a077c3f4-c96f-6f02-1902-26b5f667034b":"{\"firstName\":\"Rafal\",\"lastName\":\"Pastuszak\",\"twitterHandle\":\"paprikkaStudio\",\"avatarUrl\":\"/files/1.png\",\"phone\":\"+43505164772\",\"email\":\"rafal@paprikka.pl\",\"currentPosition\":\"designer, front-end developer\",\"description\":\"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.\",\"id\":\"a077c3f4-c96f-6f02-1902-26b5f667034b\",\"fullName\":\"Rafal Pastuszak\",\"initials\":\"RP\"}","UsersCollection-a8031acd-b49e-28bd-b3bf-b1948a49fcf3":"{\"firstName\":\"Rafal\",\"lastName\":\"Pastuszak\",\"twitterHandle\":\"paprikkaStudio\",\"avatarUrl\":\"/files/1.png\",\"phone\":\"+43505164772\",\"email\":\"rafal@paprikka.pl\",\"currentPosition\":\"designer, front-end developer\",\"description\":\"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.\",\"id\":\"a8031acd-b49e-28bd-b3bf-b1948a49fcf3\",\"fullName\":\"Rafal Pastuszak\",\"initials\":\"RP\"}","UsersCollection-c8a7b2d4-10bf-f47a-9934-1930419d1cac":"{\"firstName\":\"Rafal\",\"lastName\":\"Pastuszak\",\"twitterHandle\":\"paprikkaStudio\",\"avatarUrl\":\"/files/1.png\",\"phone\":\"+43505164772\",\"email\":\"rafal@paprikka.pl\",\"currentPosition\":\"designer, front-end developer\",\"description\":\"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.\",\"id\":\"c8a7b2d4-10bf-f47a-9934-1930419d1cac\",\"fullName\":\"Rafal Pastuszak\",\"initials\":\"RP\"}","UsersCollection-f1ee10aa-d1e4-9cf9-916e-84277a7d34ec":"{\"firstName\":\"John\",\"lastName\":\"Doe\",\"id\":\"f1ee10aa-d1e4-9cf9-916e-84277a7d34ec\",\"fullName\":\"John Doe\",\"initials\":\"JD\"}","UsersCollection-fd763933-658c-2fd7-a840-a287029fb5d1":"{\"firstName\":\"John\",\"lastName\":\"Doe\",\"id\":\"fd763933-658c-2fd7-a840-a287029fb5d1\",\"fullName\":\"John Doe\",\"initials\":\"JD\"}","pl.paprikka.ContactApp.Users":"087d3934-68a2-6984-7a5f-ac6f79cc74da,b694daa8-af0a-edc8-4f23-6c2e83a98a10,ee678ba2-b0df-60bd-bc90-03b5bd4f36d1,74132782-8606-6e8b-3787-e7882168af1f,40be4539-175b-061a-a463-e6fec57aacb8","pl.paprikka.ContactApp.Users-0622ecfc-1b0f-1d02-f2b4-d11018e4799e":"{\"firstName\":\"John\",\"lastName\":\"Doe\",\"created\":1366573501758,\"id\":\"0622ecfc-1b0f-1d02-f2b4-d11018e4799e\",\"fullName\":\"John Doe\",\"initials\":\"JD\"}","pl.paprikka.ContactApp.Users-087d3934-68a2-6984-7a5f-ac6f79cc74da":"{\"id\":\"087d3934-68a2-6984-7a5f-ac6f79cc74da\",\"firstName\":\"Someone\",\"lastName\":\"Else\",\"created\":1366569169467,\"fullName\":\"Someone Else\",\"initials\":\"SE\",\"avatarUrl\":\"http://sekretkoloru.blox.pl/resource/andywarholbanana.jpg\",\"currentPosition\":\"Graphic designer\",\"description\":\"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.\",\"phone\":\"+48 772 772 675\",\"email\":\"andy@warhol.co.uk\",\"twitterHandle\":\"andy\"}","pl.paprikka.ContactApp.Users-0c808139-611b-d309-9af6-b23a13a5545e":"{\"firstName\":\"John\",\"lastName\":\"Doe\",\"created\":1366566819379,\"id\":\"0c808139-611b-d309-9af6-b23a13a5545e\",\"fullName\":\"John Doe\",\"initials\":\"JD\"}","pl.paprikka.ContactApp.Users-129df1af-af10-473e-ebc7-f34ca8047783":"{\"firstName\":\"John\",\"lastName\":\"Doe\",\"created\":1366573405290,\"id\":\"129df1af-af10-473e-ebc7-f34ca8047783\",\"fullName\":\"John Doe\",\"initials\":\"JD\"}","pl.paprikka.ContactApp.Users-1a4c15ee-1122-f200-af67-3bbe740e7670":"{\"firstName\":\"John\",\"lastName\":\"Doe\",\"created\":1366566818793,\"id\":\"1a4c15ee-1122-f200-af67-3bbe740e7670\",\"fullName\":\"John Doe\",\"initials\":\"JD\"}","pl.paprikka.ContactApp.Users-1b61a4f1-01a4-de11-d487-9ff1449aa71f":"{\"firstName\":\"John\",\"lastName\":\"Doe\",\"created\":1366573086416,\"id\":\"1b61a4f1-01a4-de11-d487-9ff1449aa71f\",\"fullName\":\"John Doe\",\"initials\":\"JD\"}","pl.paprikka.ContactApp.Users-30cb4c6e-fdeb-9ad7-965b-0a849e40f1ce":"{\"firstName\":\"John\",\"lastName\":\"Doe\",\"created\":1366566883126,\"id\":\"30cb4c6e-fdeb-9ad7-965b-0a849e40f1ce\",\"fullName\":\"John Doe\",\"initials\":\"JD\"}","pl.paprikka.ContactApp.Users-3d4e85c1-259f-2650-d0a5-2e0ecb329a07":"{\"firstName\":\"John\",\"lastName\":\"Doe\",\"created\":1366566821264,\"id\":\"3d4e85c1-259f-2650-d0a5-2e0ecb329a07\",\"fullName\":\"John Doe\",\"initials\":\"JD\"}","pl.paprikka.ContactApp.Users-3e2ccc8b-f3ef-c485-a7e1-2b4a0a01e7ea":"{\"firstName\":\"John\",\"lastName\":\"Doe\",\"created\":1366566818200,\"id\":\"3e2ccc8b-f3ef-c485-a7e1-2b4a0a01e7ea\",\"fullName\":\"John Doe\",\"initials\":\"JD\"}","pl.paprikka.ContactApp.Users-40be4539-175b-061a-a463-e6fec57aacb8":"{\"id\":\"40be4539-175b-061a-a463-e6fec57aacb8\",\"firstName\":\"First\",\"lastName\":\"Person\",\"created\":1366585242279,\"fullName\":\"First Person\",\"initials\":\"FP\",\"avatarUrl\":\"http://www.esquire.com/cm/esquire/images/01-red-hot-chili-peppers-californication-022810-lg-29595700.jpg\",\"currentPosition\":\"\",\"description\":\"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. \",\"phone\":\"22 529 734 92\",\"email\":\"test@test.co.uk\",\"twitterHandle\":\"\"}","pl.paprikka.ContactApp.Users-418ac9bd-45eb-85c6-1baf-0e1ae321c7fc":"{\"firstName\":\"John\",\"lastName\":\"Doe\",\"created\":1366573432225,\"id\":\"418ac9bd-45eb-85c6-1baf-0e1ae321c7fc\",\"fullName\":\"John Doe\",\"initials\":\"JD\"}","pl.paprikka.ContactApp.Users-469b3d0f-d09d-b1fc-4a5c-5b1db348df16":"{\"firstName\":\"John\",\"lastName\":\"Doe\",\"created\":1366573405007,\"id\":\"469b3d0f-d09d-b1fc-4a5c-5b1db348df16\",\"fullName\":\"John Doe\",\"initials\":\"JD\"}","pl.paprikka.ContactApp.Users-5340e3d0-4d5c-20ed-5c37-d757603c762f":"{\"firstName\":\"John\",\"lastName\":\"Doe\",\"created\":1366573405712,\"id\":\"5340e3d0-4d5c-20ed-5c37-d757603c762f\",\"fullName\":\"John Doe\",\"initials\":\"JD\"}","pl.paprikka.ContactApp.Users-5d263469-6251-e5b5-f767-b1905bf233c4":"{\"firstName\":\"John\",\"lastName\":\"Doe\",\"created\":1366573407647,\"id\":\"5d263469-6251-e5b5-f767-b1905bf233c4\",\"fullName\":\"John Doe\",\"initials\":\"JD\"}","pl.paprikka.ContactApp.Users-61894291-86d7-6eb8-40b9-efadf9ea3283":"{\"firstName\":\"John\",\"lastName\":\"Doe\",\"created\":1366573405570,\"id\":\"61894291-86d7-6eb8-40b9-efadf9ea3283\",\"fullName\":\"John Doe\",\"initials\":\"JD\"}","pl.paprikka.ContactApp.Users-74132782-8606-6e8b-3787-e7882168af1f":"{\"id\":\"74132782-8606-6e8b-3787-e7882168af1f\",\"firstName\":\"Using\",\"lastName\":\"Initials\",\"created\":1366584982404,\"fullName\":\"Using Initials\",\"initials\":\"UI\",\"avatarUrl\":\"\",\"currentPosition\":\"none\",\"description\":\"\",\"phone\":\"\",\"email\":\"\",\"twitterHandle\":\"\"}","pl.paprikka.ContactApp.Users-764c7d53-9e24-66e6-12a4-734f6551c104":"{\"firstName\":\"John\",\"lastName\":\"Doe\",\"created\":1366573421445,\"id\":\"764c7d53-9e24-66e6-12a4-734f6551c104\",\"fullName\":\"John Doe\",\"initials\":\"JD\"}","pl.paprikka.ContactApp.Users-7f541a32-7189-a786-1fbd-8e7c6ced6b9e":"{\"firstName\":\"John\",\"lastName\":\"Doe\",\"created\":1366573087416,\"id\":\"7f541a32-7189-a786-1fbd-8e7c6ced6b9e\",\"fullName\":\"John Doe\",\"initials\":\"JD\"}","pl.paprikka.ContactApp.Users-8493c513-20a4-e1bc-8a44-93a596c7e9bb":"{\"firstName\":\"John\",\"lastName\":\"Doe\",\"created\":1366573405148,\"id\":\"8493c513-20a4-e1bc-8a44-93a596c7e9bb\",\"fullName\":\"John Doe\",\"initials\":\"JD\"}","pl.paprikka.ContactApp.Users-982f185c-7e39-6965-46b6-a571e8151f3e":"{\"firstName\":\"John\",\"lastName\":\"Doe\",\"created\":1366573523571,\"id\":\"982f185c-7e39-6965-46b6-a571e8151f3e\",\"fullName\":\"John Doe\",\"initials\":\"JD\"}","pl.paprikka.ContactApp.Users-b613b427-25f2-3403-82e1-ec279e6e873e":"{\"firstName\":\"John\",\"lastName\":\"Doe\",\"created\":1366566822630,\"id\":\"b613b427-25f2-3403-82e1-ec279e6e873e\",\"fullName\":\"John Doe\",\"initials\":\"JD\"}","pl.paprikka.ContactApp.Users-b694daa8-af0a-edc8-4f23-6c2e83a98a10":"{\"id\":\"b694daa8-af0a-edc8-4f23-6c2e83a98a10\",\"firstName\":\"Rafal\",\"lastName\":\"Pastuszak\",\"created\":1366569169601,\"fullName\":\"Rafal Pastuszak\",\"initials\":\"RP\",\"avatarUrl\":\"http://static.goldenline.pl/user_photo/150/user_987286_10c45f_huge.jpg\",\"currentPosition\":\"designer, front-end developer\",\"description\":\"Lorem ipsum dolor sit amet.\",\"phone\":\"+48 505 164 772\",\"email\":\"rafal@paprikka.pl\",\"twitterHandle\":\"paprikkaStudio\"}","pl.paprikka.ContactApp.Users-b6ac7a0a-67f9-a3f0-62f2-4206662cab3d":"{\"firstName\":\"John\",\"lastName\":\"Doe\",\"created\":1366573066096,\"id\":\"b6ac7a0a-67f9-a3f0-62f2-4206662cab3d\",\"fullName\":\"John Doe\",\"initials\":\"JD\"}","pl.paprikka.ContactApp.Users-bef0abe8-b33c-9d12-6f80-997473248d9c":"{\"firstName\":\"John\",\"lastName\":\"Doe\",\"created\":1366566821965,\"id\":\"bef0abe8-b33c-9d12-6f80-997473248d9c\",\"fullName\":\"John Doe\",\"initials\":\"JD\"}","pl.paprikka.ContactApp.Users-c0106d23-f2f8-12b7-7b7c-cf853464a066":"{\"firstName\":\"John\",\"lastName\":\"Doe\",\"created\":1366573404000,\"id\":\"c0106d23-f2f8-12b7-7b7c-cf853464a066\",\"fullName\":\"John Doe\",\"initials\":\"JD\"}","pl.paprikka.ContactApp.Users-d1b88fb8-ba47-edf9-8a99-6df49b7f8d3e":"{\"firstName\":\"John\",\"lastName\":\"Doe\",\"created\":1366566817648,\"id\":\"d1b88fb8-ba47-edf9-8a99-6df49b7f8d3e\",\"fullName\":\"John Doe\",\"initials\":\"JD\"}","pl.paprikka.ContactApp.Users-da0b7dbe-4820-410d-9820-ab330d24a979":"{\"firstName\":\"John\",\"lastName\":\"Doe\",\"created\":1366573405438,\"id\":\"da0b7dbe-4820-410d-9820-ab330d24a979\",\"fullName\":\"John Doe\",\"initials\":\"JD\"}","pl.paprikka.ContactApp.Users-e0f33451-8e97-f9e2-d63b-fd304fda88ab":"{\"firstName\":\"John\",\"lastName\":\"Doe\",\"created\":1366566820092,\"id\":\"e0f33451-8e97-f9e2-d63b-fd304fda88ab\",\"fullName\":\"John Doe\",\"initials\":\"JD\"}","pl.paprikka.ContactApp.Users-e5ce060a-4434-2f41-72e4-14aa0ec6ac7b":"{\"firstName\":\"John\",\"lastName\":\"Doe\",\"created\":1366566930700,\"id\":\"e5ce060a-4434-2f41-72e4-14aa0ec6ac7b\",\"fullName\":\"John Doe\",\"initials\":\"JD\"}","pl.paprikka.ContactApp.Users-ecce2515-21fe-bcfe-afbc-5d17d36d5808":"{\"firstName\":\"John\",\"lastName\":\"Doe\",\"created\":1366573404851,\"id\":\"ecce2515-21fe-bcfe-afbc-5d17d36d5808\",\"fullName\":\"John Doe\",\"initials\":\"JD\"}","pl.paprikka.ContactApp.Users-ee678ba2-b0df-60bd-bc90-03b5bd4f36d1":"{\"firstName\":\"John\",\"lastName\":\"Doe\",\"created\":1366584977880,\"id\":\"ee678ba2-b0df-60bd-bc90-03b5bd4f36d1\",\"fullName\":\"John Doe\",\"initials\":\"JD\"}"};
    if(!('pl.paprikka.ContactApp.Users' in window.localStorage)){
      _.extend(window.localStorage, exampleData);
      window.location.reload();
    }
    function mockLoadingDelay(){
      App.start();
      console.log('Application::initialized');
    };

    setTimeout(mockLoadingDelay, 900);
  });
});