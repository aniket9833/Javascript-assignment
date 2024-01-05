const marks = 75;

if (marks>90 && marks<=100) {
    console.log("A grade");
}
else if (marks>70 && marks<90) {
    console.log("B grade");
}
else if (marks>50 && marks<70) {
    console.log("C grade");
}
else if (marks<50) {
    console.log("F grade");
}
else {
    console.log("Please enter valid marks");
}