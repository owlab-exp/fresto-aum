<br>
<c:if test="${userSession.account.bannerOption}">
	<table align="center" background="<c:url value="/images/bkg-topbar.gif"/>" cellpadding="5" width="100%">
	<tr><td>
	<center>
			<c:out value="${userSession.account.bannerName}" escapeXml="false"/>
			&nbsp;
	</center>
	</td></tr>
	</table>
</c:if>
