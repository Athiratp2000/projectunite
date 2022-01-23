<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html> 
  <head>
    <meta charset="utf8"/>
  </head>
<body>
    <section>
  
  <table>
    <tr bgcolor="#A69B99">
      <th style="text-align:left">Id</th>
      <th style="text-align:left">Name</th>
      <th style="text-align:left">Price</th>
      <th style="text-align:left">City</th>
      <th style="text-align:left">Information</th>
      <th style="text-align:left"> State</th>
    </tr>
    <xsl:for-each select="Sports/sponsee">
   
    
    <tr>
      <td><xsl:value-of select="id"/></td>
      <td><xsl:value-of select="name"/></td>
      <td><xsl:value-of select="price"/></td>
      <td><xsl:value-of select="city"/></td>
      <td><xsl:value-of select="information"/></td>
      <td><xsl:value-of select="state"/></td>
    </tr>
    
    </xsl:for-each> 
  </table>
</section>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
