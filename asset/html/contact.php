<?
    include_once $_SERVER['DOCUMENT_ROOT']."/asset/php/db.php";
?>

<!DOCTYPE html>
<html lang="ko">
<head>
    <!-- meta -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="프론트엔드 정선희 포트폴리오 사이트입니다.">
    <title>contact - JSH portfolio</title>
    <!-- css -->
    <link rel="stylesheet" href="../css/common.css">
    <link rel="stylesheet" href="../css/global.css">
    <link rel="stylesheet" href="../css/contact.css">
    <link rel="stylesheet" href="../css/responsive.css">
    <!-- font -->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,400;1,700&display=swap" rel="stylesheet">
    <!-- js -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <!-- favicon -->
    <link rel="shortcut icon" href="../img/favicon32.ico">
    <link rel="apple-touch-icon-precomposed" href="../img/favicon32.ico">
    <!-- og meta -->
    <meta property="og:url" content="https://mardeureu.github.io/portfolio/">
    <meta property="og:title" content="jung-sunhee portfolio">
    <meta property="og:description" content="&#128421; 프론트엔드 정선희 포트폴리오 웹사이트 입니다.">
    <meta property="og:site_name" content="jung-sunhee portfolio">
    <meta property="og:image" content="https://imgur.com/rHVuY5X">
    <meta property="og:type" content="website">
</head>
<body>
    <!-- header -->
    <header>
        <div class="header-wrap">
            <a href="../../index.html" rel="home" class="home_logo" aria-label="홈으로 바로가기"></a>
            <nav>
                <ul>
                    <li><a href="../../index.html">home</a></li>
                    <li><a href="about.html">about</a></li>
                    <li><a href="work.html">work</a></li>
                    <li><a href="contact.html">contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <!-- header END-->
    <h2>contact</h2>
    <div class="contact-wrap">
        <form name="" method="POST" action="contact_ok.php">
            <fieldset>
                <legend>contact</legend>
                <input type="text" id="user_name" name="user_name" placeholder="이름을 입력해주세요." aria-label="이름을 입력해주세요.">
                <input type="email" id="user_email" name="user_email" placeholder="이메일을 입력해주세요." aria-label="이메일을 입력해주세요.">
                <input type="text" id="tit" name="tit" placeholder="제목을 입력해주세요." aria-label="제목을 입력해주세요.">
                <textarea id="msg" name="msg" placeholder="내용을 입력해주세요." aria-label="내용을 입력해주세요."></textarea>
                <button type="submit">제출</button>
            </fieldset>
        </form>
        <div class="mycontact">
            <h5>let's be in touch</h5>
            <dl>
                <dt>mobile</dt>
                <dd><a href="tel:010-7338-0019" rel="author">010-7338-0019</a></dd>
                <dt>email</dt>
                <dd><a href="mailto:siixx@daum.net" rel="author">siixx@daum.net</a></dd>
                <dt>git</dt>
                <dd><a href="https://github.com/mardeureu" target="_blank" rel="me external noopener">https://github.com/mardeureu</a></dd>
            </dl>
        </div>
    </div>
</body>
</html>