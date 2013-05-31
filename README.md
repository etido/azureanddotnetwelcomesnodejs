# azure and dot net welcomes nodejs

## A nodeJS-dotnet server running fine on windows azure!

* .net version >= 4.5
* Nodejs = 0.8
* Express.js = 3.1.0
* Git for deploy

(thanks to http://tomasz.janczuk.org/2013/03/run-c-and-nodejs-code-in-process-with.html who inspire me)

1. The .NET class library contains the following Task:
<pre>
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Threading.Tasks;

namespace Startup
{
    public class Startup
    {

        public async Task<object> Invoke(string input)
        {
            return ".NET welcomes " + input.ToString() + " at "+DateTime.Now;
        }
    }
}
<pre>