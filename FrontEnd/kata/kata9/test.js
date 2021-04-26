var session = prompt("관심있는 세션을 선택해주세요. 1.마케팅 2.개발 3.디자인");

switch(session)
{
    case "1": document.write("<p>마케팅 세션은 <strong>201호</strong></p>")
        break;
    case "2": document.write("<p>개발 세션은 <strong>202호</strong></p>")
        break;
    case "3": document.write("<p>디자인 세션은 <strong>203호</strong></p>")
        break;
    default: alert("입력 오류");
}