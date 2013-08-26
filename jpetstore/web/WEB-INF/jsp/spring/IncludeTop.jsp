<%@ page contentType="text/html" %>
<%@ taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt"    uri="http://java.sun.com/jsp/jstl/fmt" %>
<html><head><title>JPetStore Demo</title>
<meta content="text/html; charset=windows-1252" http-equiv="Content-Type" />
<META HTTP-EQUIV="Cache-Control" CONTENT="max-age=0">
<META HTTP-EQUIV="Cache-Control" CONTENT="no-cache">
<meta http-equiv="expires" content="0">
<META HTTP-EQUIV="Expires" CONTENT="Tue, 01 Jan 1980 1:00:00 GMT">
<META HTTP-EQUIV="Pragma" CONTENT="no-cache">
	<script src="<c:url value="/js/fresto_getip.js"/>"></script>
		<!-- Too slow some time -->
		<script src="http://smart-ip.net/geoip-json?callback=getip"></script>
		<!-- END -->
		<script src="<c:url value="/js/jquery-1.10.2.js"/>"></script>
		<script src="<c:url value="/js/randomUUID.js"/>"></script>
		<script src="<c:url value="/js/fresto_link.js"/>"></script>

</head>

<body bgcolor="white">

<table background="<c:url value="/images/bkg-topbar.gif"/>" border="0" cellspacing="0" cellpadding="5" width="100%">
  <tbody>
  <tr>
    <td><a href="<c:url value="/shop/index.do"/>"><img border="0" src="<c:url value="/images/logo-topbar.gif"/>" /></a></td>
    <td align="right"><a href="<c:url value="/shop/viewCart.do"/>"><img border="0" name="img_cart" src="<c:url value="/images/cart.gif"/>" /></a>
      <img border="0" src="<c:url value="/images/separator.gif"/>" />

<c:if test="${empty userSession.account}" >
      <a href="<c:url value="/shop/signonForm.do"/>"><img border="0" name="img_signin" src="<c:url value="/images/sign-in.gif"/>" /></a>
</c:if>

<c:if test="${!empty userSession.account}" >
      <a href="<c:url value="/shop/signoff.do"/>"><img border="0" name="img_signout" src="<c:url value="/images/sign-out.gif"/>" /></a>
      <img border="0" src="<c:url value="/images/separator.gif"/>" />
      <a href="<c:url value="/shop/editAccount.do"/>"><img border="0" name="img_myaccount" src="<c:url value="/images/my_account.gif"/>" /></a>
</c:if>

<img border="0" src="<c:url value="/images/separator.gif"/>" /><a href="<c:url value="/help.html"/>"><img border="0" name="img_help" src="<c:url value="/images/help.gif"/>" /></a>
    </td>
    <td align="left" valign="bottom">
      <form action="<c:url value="/shop/searchProducts.do"/>" method="post">
			  <input type="hidden" name="search" value="true"/>
        <input name="keyword" size="14" />&nbsp;<input border="0" src="<c:url value="/images/search.gif"/>" type="image"/>
      </form>
    </td>
  </tr>
  </tbody>
</table>

<%@ include file="IncludeQuickHeader.jsp" %>
