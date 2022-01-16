<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html> 
<body>
  <h2>Highlighted Achievements</h2>
  <table border="1">
    <tr bgcolor="#9acd32">
      <th style="text-align:left">Year</th>
      <th style="text-align:left">Company</th>
      <th style="text-align:left">Id</th>
      <th style="text-align:left">Name</th>
      <th style="text-align:left">Role</th>
      <th style="text-align:left">Sport</th>
      <th style="text-align:left">Contract</th>
      <th style="text-align:left">Fund</th>
    </tr>
    <xsl:for-each select="sportsponsorship/sponsorship">
    <xsl:sort select="year"></xsl:sort>
    <xsl:if test="contract>2">
  
    <tr>
      <td><xsl:value-of select="year"/></td>
      <td><xsl:value-of select="company"/></td>
      <td><xsl:value-of select="id"/></td>
      <td><xsl:value-of select="name"/></td>
      <td><xsl:value-of select="role"/></td>
      <td><xsl:value-of select="sport"/></td>
      <td><xsl:value-of select="contract"/></td>
      <td><xsl:value-of select="fund"/></td>
    </tr>
    </xsl:if>
    </xsl:for-each>
  
  </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>

