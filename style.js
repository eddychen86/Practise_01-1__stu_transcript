// 學號警告
$(".stuNo").keyup(function check() {
	var no = $(this).val();
    
	if (isNaN(no)) {
		$("#warning").text("不是數字");
	} else if (no.length != 5) {
		$("#warning").text("學號長度不對");
	} else {
		$("#warning").text("");
	}
});

// 成績警告
$(".stuScore").keyup(function check() {
	var score = $(this).val();
	
	if (isNaN(score)) {
		$("#warning").text("不是數字");
	} else if (score > 100) {
		$("#warning").text("超過成績所定範圍");
	} else {
		$("#warning").text("");
	}
});

////////////////////////////////////////////////////////////////////

function check() {
	var stu01 = { no: document.getElementsByClassName("No" ),
		       score: document.getElementsByClassName("s-1") }
	var stu02 = { no: document.getElementsByClassName("No" ),
			   score: document.getElementsByClassName("s-2") }
	var stu03 = { no: document.getElementsByClassName("No" ),
			   score: document.getElementsByClassName("s-3") }
	var stu04 = { no: document.getElementsByClassName("No" ),
			   score: document.getElementsByClassName("s-4") }
	var stu05 = { no: document.getElementsByClassName("No" ),
			   score: document.getElementsByClassName("s-5") }

	var s1 = Number(stu01.score[0].value);
	var s2 = Number(stu02.score[0].value);
	var s3 = Number(stu03.score[0].value);
	var s4 = Number(stu04.score[0].value);
	var s5 = Number(stu05.score[0].value);

	var listStu = [s1, s2, s3, s4, s5];

	var high = 0;
	var low = 100;

	var val = average(listStu);
	$("#average").text(val);

	var best = max(high, listStu);
	$("#best").text(best);

	var low = min(low, listStu);
	$("#low").text(low, listStu);

	while (failcount(listStu) > listStu.length/2) {
		listStu = add(listStu);
	}
	$("#add").text(listStu);
}

////////////////////////////////////////////////////////////////////

// 平均值
function average(arr) {
	var total = 0;
	for ( i=0 ; i<arr.length ; i++ ) {
		total = total + arr[i];
	}
	var val = total / arr.length;
	return val;
}

////////////////////////////////////////////////////////////////////

// 最高分
function max(high, arr) {
	for ( i=0 ; i<arr.length ; i++ ) {
		if ( arr[i] > high ) {
			best = arr[i];
		}
	}
	return best
}

// 最低分
function min(low, arr) {
	for ( i=0 ; i<arr.length ; i++ ) {
		if ( arr[i] < low ) {
			low = arr[i];
		}
	}
	return low
}

////////////////////////////////////////////////////////////////////

// 不及格
function failcount(arr_x) {
	var fail = 0;
	for ( i=0 ; i<arr_x.length ; i++ ) {
		if ( arr_x[i] < 60 ) {
			fail++;
		}
	}
	return fail
}

// 加分
function add(arr_x) {
	for ( i=0 ; i<arr_x.length ; i++ ) {
		arr_x[i]++;
	}
	return arr_x
}

////////////////////////////////////////////////////////////////////

