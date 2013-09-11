package fresto.servlet;

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.util.*;

public class ShowRequestHeaders extends HttpServlet {
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	response.setContentType("text/html");
	PrintWriter out = response.getWriter();
	String title = "Showing Request Headers";
	StringBuilder sb = new StringBuilder();
	sb.append("<html>\n<head>\n");
	sb.append("<title>" + title + "</title>\n");
	sb.append("</head>\n");
	sb.append("<body bgcolor='#FDF5E6'>\n");
	sb.append("<h1 align='center'>"+ title + "</h1>\n");
	sb.append("<b> Request Method: </b>" + request.getMethod() + "<br>\n");
	sb.append("<b> Request URI: </b>" + request.getRequestURI() + "<br>\n");
	sb.append("<b> Request Protocol: </b>" + request.getProtocol() + "<br>\n");
	sb.append("<table border=1 align='center'>\n");
	sb.append("<tr bgcolor='#FFAD00'>\n");
	sb.append("<th> Header Name </th><th> Header Value </th></tr>\n");
	Enumeration headerNames = request.getHeaderNames();
	while(headerNames.hasMoreElements()) {
	    String headerName = (String)headerNames.nextElement();
	    sb.append("<tr><td>" + headerName + "</td>");
	    sb.append("<td>" + request.getHeader(headerName) + "</td></tr>\n");
	}
	sb.append("</table>\n");
	sb.append("</body></html>");
	out.println(sb.toString());
	out.close();
    }

    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	doGet(request, response);
    }
}
