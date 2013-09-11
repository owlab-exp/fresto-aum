<%@ include file="IncludeTop.jsp" %>

<table border="0" cellspacing="0" width="100%">
  <tbody>
  <tr>
    <td valign="top" width="100%">

      <table align="left" border="0" cellspacing="0" width="80%">
        <tbody>
        <tr>
          <td valign="top">

            <!-- SIDEBAR -->

            <table bgcolor="#FFFF88" border="0" cellspacing="0" cellpadding="5" width="200">
              <tbody>
      <tr>
      <td>
        <c:if test="${!empty userSession.account}">
					<b><i><font size="2" color="BLACK">Welcome <c:out value="${userSession.account.firstName}"/>!</font></i></b>
        </c:if>
        &nbsp;
      </td>
      </tr>
              <tr>
                <td>
                <a href="<c:url value="/shop/viewCategory.do?categoryId=FISH"/>">
                <img border="0" src="<c:url value="/images/fish_icon.gif"/>" /></a>
                </td>
              </tr>
              <tr>
                <td>
                <a href="<c:url value="/shop/viewCategory.do?categoryId=DOGS"/>">
                <img border="0" src="<c:url value="/images/dogs_icon.gif"/>" /></a>
                </td>
              </tr>
              <tr>
                <td>
                <a href="<c:url value="/shop/viewCategory.do?categoryId=CATS"/>">
                <img border="0" src="<c:url value="/images/cats_icon.gif"/>" /></a>
                </td>
              </tr>
              <tr>
                <td>
                <a href="<c:url value="/shop/viewCategory.do?categoryId=REPTILES"/>">
                <img border="0" src="<c:url value="/images/reptiles_icon.gif"/>" /></a>
                </td>
              </tr>
              <tr>
                <td>
                <a href="<c:url value="/shop/viewCategory.do?categoryId=BIRDS"/>">
                <img border="0" src="<c:url value="/images/birds_icon.gif"/>" /></a>
                </td>
              </tr>

              </tbody>
             </table>

           </td>
          <td align="center" bgcolor="white" height="300" width="100%">

          <!-- MAIN IMAGE -->

	  <map name="estoremap"><area alt="Birds" coords="72,2,280,250" href="<c:url value="/shop/viewCategory.do?categoryId=BIRDS"/>" shape="RECT" />
		  <area alt="Fish" coords="2,180,72,250" href="<c:url value="/shop/viewCategory.do?categoryId=FISH"/>" shape="RECT" />
	  <area alt="Dogs" coords="60,250,130,320" href="<c:url value="/shop/viewCategory.do?categoryId=DOGS"/>" shape="RECT" />
  <area alt="Reptiles" coords="140,270,210,340" href="<c:url value="/shop/viewCategory.do?categoryId=REPTILES"/>" shape="RECT" />
	  <area alt="Cats" coords="225,240,295,310" href="<c:url value="/shop/viewCategory.do?categoryId=CATS"/>" shape="RECT" />
  <area alt="Birds" coords="280,180,350,250" href="<c:url value="/shop/viewCategory.do?categoryId=BIRDS"/>" shape="RECT" /></map>
          <img border="0" height="355" src="<c:url value="/images/splash.gif"/>" align="center" usemap="#estoremap" width="350" />
          </td></tr></tbody></table></td></tr>

        </tbody>
        </table>

<%@ include file="IncludeBanner.jsp" %>

<%@ include file="IncludeBottom.jsp" %>
