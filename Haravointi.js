function funktio(x)
{
  fx = 0.5*(Math.pow(x,275)) - (2 * x) + 1;
  return fx;
}

function puolitus(a, b)
{
  var fc = 1;
  
  while (Math.abs(fc) > 1e-14)
  {
    var c = (a + b) / 2;
    fc = funktio(c);
    if (fc > 0)
    {
      b = c;
    } 
    else if (fc < 0)
    {
      a = c;
    }
  }
  
  document.write('<br /> ' + c);  
}

function haravointi()
{
  
  var fi1;
  var fi2;
  
  for (var i = 0; i < 100; i += 0.01)
  {
    fi1 = funktio(i);
    
    if(Math.abs(fi1) > 1E200)
    {
      document.write("<br />"+"Haravointi pysäytetty turvallisuussyistä.");
      break; 
    }
    
    if (fi1 * fi2 < 0)
    {
      if (fi1 < 0)
      {
        a = i;
        b = i - 0.01;
      } 
      else if (fi2 < 0)
      {
        a = i - 0.01;
        b = i
      } 
      else
      {
        document.write('HÄ!');
      }
      
      puolitus(a, b);
    } 
    else if (fi1 == 0)
    {
      document.write('<br /> ' + i);
    }
    
    fi2 = fi1;
  }
  
  for (var i = 0; i > -100; i -= 0.01)
  {
    fi1 = funktio(i);
    
    if(Math.abs(fi1) > 1E200)
    {
      document.write("<br />"+"Haravointi pysäytetty turvallisuussyistä.");
      break; 
    }
    
    if (fi1 * fi2 < 0)
    {
      if (fi1 < 0)
      {
        a = i;
        b = i + 0.01;
      } 
      else if (fi2 < 0)
      {
        a = i + 0.01;
        b = i
      } 
      else
      {
        document.write('HÄ!');
      }
      
      puolitus(a, b);
    } 
    else if (fi1 == 0)
    {
      document.write('<br /> ' + i);
    }
    
    fi2 = fi1;
  }
}

haravointi();