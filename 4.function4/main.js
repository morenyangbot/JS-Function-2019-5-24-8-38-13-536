function countWords(message){
    // wirte your code here
    return message.split(' ').filter(word => !!word).length
}
countWords('Good morning, I love JavaScript.'); // should return 5
