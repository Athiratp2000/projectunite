<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:template match="/">
<html>
<head>
<meta charset="UTF-8"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Employee Management System xsl</title>
</head>
<body>
<h1>Employee Management System xsl</h1>
<table>
<tr bgcolor="#9acd32">
<th style="text-align:left">ID</th>
<th style="text-align:left">Name</th>
<th style="text-align:left">Age</th>
<th style="text-align:left">Salary</th>
<th style="text-align:left">Email</th>
<th style="text-align:left">Phone</th>
<th style="text-align:left">Designation</th>
<th style="text-align:left">promotion</th>
</tr>
<xsl:for-each select="Company/Employee">
<tr>
<td>
<xsl:value-of select="id"/>
</td>
<td>
<xsl:value-of select="name"/>
</td>
<td>
<xsl:value-of select="age"/>
</td>
<td>
<xsl:value-of select="salary"/>
</td>
<td>
<xsl:value-of select="emailid"/>
</td>
<td>
<xsl:value-of select="phoneno"/>
</td>
<td>
<xsl:value-of select="designation"/>
</td>
<xsl:if test="age >= 50">
<td>Associate Project Manager</td>
</xsl:if>
<xsl:if test="age >= 41">
<td>Team Leader</td>
</xsl:if>
<xsl:if test="age < 40">
<td>Developer</td>
</xsl:if>
</tr>
</xsl:for-each>
</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>