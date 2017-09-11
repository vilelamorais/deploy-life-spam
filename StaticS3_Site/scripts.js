var API_ENDPOINT = "https://f0muoa6aue.execute-api.us-east-1.amazonaws.com/DL_DEV01/siterequest"

document.getElementById("searchButton").onclick = function(){

	var postId = $('#postId').val();

	$.ajax({
				url: API_ENDPOINT + '?postId='+postId,
				type: 'GET',
				success: function (response) {

					$('#posts tr').slice(1).remove();

	        jQuery.each(response, function(i,data) {

						$("#posts").append("<tr> \
								<td>" + data['DeployID'] + "</td> \
								<td>" + data['nomeComponente'] + "</td> \
								<td>" + data['numeroVersao'] + "</td> \
								<td>" + data['nomeResponsavel'] + "</td> \
								<td>" + data['statusDeploy'] + "</td> \
								<td>" + data['dataDeploy'] + "</td> \
								</tr>");
	        });
				},
				error: function () {
						alert("error");
				}
		});
}