"use strict";$(function(){function e(){$(this).addClass("active"),c=$(this).attr("data-id"),u=w[c],s.empty(),i.html(u.text),u.options.forEach(function(e){var t=$("<button>"+e+"</button>");s.append(t)})}function t(e){"clowns"===$(e.target).text()?(alert("YOU WIN!!!"),l.play()):$(e.target).text()===u.answer?alert(u.correct):(alert(u.rebuttal),o(),r.eq(c).removeClass("active"))}function o(){h--,n.eq(h).hide(),0===h&&a()}function a(){console.log("game over"),confirm("Play again?")&&(n.show(),h=3)}console.log("Js loaded"),$("#button").click(function(){$("html, body").animate({scrollTop:$("#myDiv").offset().top},2e3)});var r=$(".block"),i=$(".answerText"),s=$(".answerButtons"),n=$(".hearts"),l=$(".audio"),u=null,c=null,h=3;r.on("click",e),s.on("click","button",t);var w=[{text:"What scares Columbus more than zombies?",options:["spiders","clowns","mice"],answer:"clowns",correct:"That is correct! Moving right along..",rebuttal:"Sorry!, try again.."},{text:"The Zombie Breakout was caused by which rotten food?",options:["Sushi","Spaghetti","Burgers"],answer:"Burgers",correct:"Pretty gross huh? Move ahead one space!",rebuttal:"Seriously?"},{text:"What is Talahasse's one weakness?",options:["Twinkies","Puppies","Cupcakes"],answer:"Twinkies",correct:"You live to die another day..",rebuttal:"Perhaps that is your one weakness?"},{text:"Rule #17.. Don'\t be a what?",options:["Zombie","Hero","Crook"],answer:"Hero",correct:"So you are doing great keep survivin and thrivin!",rebuttal:"Zombies are eating you, guess better!"},{text:"Which famous actor does Columbus shoot for acting like a zombie?",options:["Ben Affleck","Bill Murray","Brad Pitt"],answer:"Bill Murray",correct:"I knew you'd get that one! On to the next question!",rebuttal:"If you got this wrong you deserve to be eaten by zombies."},{text:"Witchita and Lil Rock are heading where?",options:["The Grand Canyon","Disney Land","Pacific Playland"],answer:"Pacific Playland",correct:"Well done! Please continue.",rebuttal:"NOPE! Sorry, you'\re zombie food.."},{text:"Which of these rules are not on Columbus' list?",options:["Bounty Paper Towels","Always wear socks","Enjoy the little things"],answer:"Always wear socks",correct:"You are a trivia master!",rebuttal:"Not quite but keep trying!"},{text:"What was the film's gross three months after it released (with a budget of 23 million dollars)?",options:["75 million","1 billion","40 million"],answer:"75 million",correct:"That is correct! Moving right along..",rebuttal:"I know right? WRONG. You lose a life."},{text:"What scares Columbus more than zombies?",options:["spiders","clowns","mice"],answer:"clowns",correct:"You'\ve nearly won!",rebuttal:"Sorry!, try again.."},{text:"The Zombie Breakout was caused by which rotten food?",options:["Sushi","Spaghetti","Burgers"],answer:"Burgers",correct:"You live to die another day..",rebuttal:"Seriously?"},{text:"What is Talahasse's one weakness?",options:["Twinkies","Puppies","Cupcakes"],answer:"Twinkies",correct:"So you are doing great keep survivin and thrivin!",rebuttal:"Perhaps that is your one weakness?"},{text:"Rule #17.. Don'\t be a what?",options:["Zombie","Hero","Crook"],answer:"Hero",correct:"I knew you'd get that one! On to the next question!",rebuttal:"Zombies are eating you, guess better!"},{text:"Which famous actor does Columbus shoot for acting like a zombie?",options:["Ben Affleck","Bill Murray","Brad Pitt"],answer:"Bill Murray",correct:"Well done! Please continue.",rebuttal:"If you got this wrong you deserve to be eaten by zombies."},{text:"Witchita and Lil Rock are heading where?",options:["The Grand Canyon","Disney Land","Pacific Playland"],answer:"Pacific Playland",correct:"You are a trivia master!",rebuttal:"NOPE! Sorry, you'\re zombie food.."},{text:"Which of these rules are not on Columbus' list?",options:["Bounty Paper Towels","Always wear socks","Enjoy the little things"],answer:"Always wear socks",correct:"That is correct! Moving right along..",rebuttal:"Not quite but keep trying!"},{text:"What was the film's gross three months after it released (with a budget of 23 million dollars)?",options:["75 million","1 billion","40 million"],answer:"75 million",correct:"You'\ve nearly won!",rebuttal:"I know right? WRONG. You lose a life."}]});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyIkIiwiJHNxdWFyZXMiLCJvbiIsInRoaXMiLCJyZXZlYWxRdWVzdGlvbiIsImF0dHIiLCJxdWVzdGlvbiIsInRyaXZpYVF1ZXN0aW9uc0FycmF5IiwicXVlc3Rpb25JbmRleCIsIiRhbnN3ZXJCdXR0b25zIiwiZW1wdHkiLCJ0ZXh0IiwiJGFuc3dlclRleHQiLCIkYnRuIiwib3B0aW9uIiwiY2hlY2tBbnN3ZXIiLCJlIiwiYWxlcnQiLCJ0YXJnZXQiLCJwbGF5IiwiYW5zd2VyIiwicmVidXR0YWwiLCJyZW1vdmVIZWFydCIsImxpdmVzIiwiJGhlYXJ0cyIsImdhbWVPdmVyIiwiY29uc29sZSIsImNvbmZpcm0iLCJwbGF5QWdhaW4iLCJzaG93IiwibG9nIiwiY2xpY2siLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwib2Zmc2V0IiwidG9wIiwib3B0aW9ucyIsImNvcnJlY3QiXSwibWFwcGluZ3MiOiJZQUFBQSxHQUFFLFdBNkJBQyxRQUFTQyxLQUVURixFQUFBRyxNQUFTQyxTQUFBQSxVQUVQSixFQUFBQSxFQUFpQkcsTUFBQUUsS0FBakIsV0FHQUMsRUFBV0MsRUFBcUJDLEdBQWhDRixFQUFXQyxRQUVYRSxFQUFBQSxLQUFlQyxFQUFmQyxNQUVBQyxFQUFBQSxRQUFpQk4sUUFBQUEsU0FBU0ssR0FHeEIsR0FBTUUsR0FBT2IsRUFBQUEsV0FBYWMsRUFBYixZQUFiTCxHQUFhVCxPQUFBQSxLQVNqQixRQUFTZSxHQUFZQyxHQUFHLFdBQXhCaEIsRUFBQWdCLEVBQVNELFFBQUFBLFFBQ1BFLE1BQVFDLGNBQ05ELEVBQU1FLFFBRU5uQixFQUFBZ0IsRUFBQUUsUUFBQVAsU0FBQUwsRUFBQWMsT0FIRkgsTUFJT1gsRUFBUVksVUFBUkQsTUFFQVgsRUFBQWUsVUFDTEosSUFDQUssRUFBQUEsR0FBQUEsR0FBQUEsWUFBQUEsV0FLSixRQUFBQSxLQUNBQyxJQUNFQSxFQUFBQSxHQUFBQSxHQUFBQSxPQUNXQSxJQUFYQyxHQUFBQyxJQUlGLFFBQVNBLEtBQVRDLFFBQVNELElBQUFBLGFBQ0tFLFFBQVosaUJBRUFILEVBQUlJLE9BQ0ZKLEVBQVFLLEdBN0VaSCxRQUFBSSxJQUFNLGFBRU5KLEVBQUFBLFdBQVlLLE1BQUEsV0FHVi9CLEVBQUUsY0FBY2dDLFNBRGhCQyxVQUFXRixFQUFBQSxVQUFNRyxTQUFXQyxLQUMxQixNQVdOLElBQUFsQyxHQUFBRCxFQUFBLFVBR1FZLEVBQWNaLEVBQUUsZUFEaEJDLEVBQWFELEVBQUYsa0JBQ1hZLEVBQUFBLEVBQWNaLFdBQ2RTLEVBQUFBLEVBQUFBLFVBR05ILEVBQUEsS0FHSUUsRUFBZ0IsS0FEaEJGLEVBQUFBLENBRUpMLEdBQUlzQixHQUFRLFFBQVpuQixHQXVCQUssRUFBZVAsR0FBRyxRQUFTLFNBQVVhLEVBbURyQyxJQUFNUixLQUNKSSxLQUFNLDBDQUNOeUIsU0FBVSxVQUFXLFNBQVUsUUFDL0JoQixPQUFRLFNBQ1JpQixRQUFTLHdDQUNUaEIsU0FBVSx3QkFFVlYsS0FBTSx1REFDTnlCLFNBQVUsUUFBUyxZQUFhLFdBQ2hDaEIsT0FBUSxVQUNSaUIsUUFBUywwQ0FDVGhCLFNBQVUsZUFFVlYsS0FBTSxvQ0FDTnlCLFNBQVUsV0FBWSxVQUFXLFlBQ2pDaEIsT0FBUSxXQUNSaUIsUUFBUyxnQ0FDVGhCLFNBQVUsdUNBRVZWLEtBQU0sK0JBQ055QixTQUFVLFNBQVUsT0FBUSxTQUM1QmhCLE9BQVEsT0FDUmlCLFFBQVMsb0RBQ1RoQixTQUFVLDBDQUVWVixLQUFNLG1FQUNOeUIsU0FBVSxjQUFlLGNBQWUsYUFDeENoQixPQUFRLGNBQ1JpQixRQUFTLHNEQUNUaEIsU0FBVSw4REFFVlYsS0FBTSwyQ0FDTnlCLFNBQVUsbUJBQW9CLGNBQWUsb0JBQzdDaEIsT0FBUSxtQkFDUmlCLFFBQVMsOEJBQ1RoQixTQUFVLHVDQUVWVixLQUFNLGtEQUNOeUIsU0FBVSxzQkFBdUIsb0JBQXFCLDJCQUN0RGhCLE9BQVEsb0JBQ1JpQixRQUFTLDJCQUNUaEIsU0FBVSwrQkFFVlYsS0FBTSxrR0FDTnlCLFNBQVUsYUFBYyxZQUFhLGNBQ3JDaEIsT0FBUSxhQUNSaUIsUUFBUyx3Q0FDVGhCLFNBQVUsMENBRVZWLEtBQU0sMENBQ055QixTQUFVLFVBQVcsU0FBVSxRQUMvQmhCLE9BQVEsU0FDUmlCLFFBQVMsc0JBQ1RoQixTQUFVLHdCQUVWVixLQUFNLHVEQUNOeUIsU0FBVSxRQUFTLFlBQWEsV0FDaENoQixPQUFRLFVBQ1JpQixRQUFTLGdDQUNUaEIsU0FBVSxlQUVWVixLQUFNLG9DQUNOeUIsU0FBVSxXQUFZLFVBQVcsWUFDakNoQixPQUFRLFdBQ1JpQixRQUFTLG9EQUNUaEIsU0FBVSx1Q0FFVlYsS0FBTSwrQkFDTnlCLFNBQVUsU0FBVSxPQUFRLFNBQzVCaEIsT0FBUSxPQUNSaUIsUUFBUyxzREFDVGhCLFNBQVUsMENBRVZWLEtBQU0sbUVBQ055QixTQUFVLGNBQWUsY0FBZSxhQUN4Q2hCLE9BQVEsY0FDUmlCLFFBQVMsOEJBQ1RoQixTQUFVLDhEQUVWVixLQUFNLDJDQUNOeUIsU0FBVSxtQkFBb0IsY0FBZSxvQkFDN0NoQixPQUFRLG1CQUNSaUIsUUFBUywyQkFDVGhCLFNBQVUsdUNBRVZWLEtBQU0sa0RBQ055QixTQUFVLHNCQUF1QixvQkFBcUIsMkJBQ3REaEIsT0FBUSxvQkFDUmlCLFFBQVMsd0NBQ1RoQixTQUFVLCtCQUVWVixLQUFNLGtHQUNOeUIsU0FBVSxhQUFjLFlBQWEsY0FDckNoQixPQUFRLGFBQ1JpQixRQUFTLHNCQUNUaEIsU0FBVSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKCgpID0+IHtcblxuICBjb25zb2xlLmxvZygnSnMgbG9hZGVkJyk7XG5cbiAgJCgnI2J1dHRvbicpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgIHNjcm9sbFRvcDogJCgnI215RGl2Jykub2Zmc2V0KCkudG9wXG4gICAgfSwgMjAwMCk7XG4gIH0pO1xuXG4vLyBFYWNoIGRpdiBzcXVhcmUgaGFzIGFuIGluZGV4IHdoaWNoIGlzIGNyZWF0ZWQgLyB0YXJnZXRlZCBieSB0aGUgY2xpY2sgZXZlbnRcbi8vIE9MRCBDT0RFOiAsICB1c2VyQW5zd2VyID0gcHJvbXB0IGNvcnJlc3BvbmRpbmcgcXVlc3Rpb24gZnJvbSBhcnJheSBvZiBvYmplY3RzLFxuLy8gaW5qZWN0IGNvbnRlbnQgd2l0aCBqYXZhc2NyaXB0IHRvIGFuIGh0bWwgZWxlbWVudHMgZm9yIGRpc3BsYXkgb2YgcXVlc3Rpb24gd2l0aCBvcHRpb25zXG5cbi8vIEhvdyB0byBnZXQgcXVlc3Rpb25zIHRvIGRpc2FwcGVhciBvbmNlIGJ1dHRvbiBzZWxlY3Rpb24gb2NjdXJzLCAuZW1wdHkoKTtcblxuLy8gTmVlZCB0byBnZXQgbGl2ZXMgdG8gZ28gZG93biBpZiBpbmNvcnJlY3Qgc2VsZWN0aW9uXG5cbiAgY29uc3QgJHNxdWFyZXMgPSAkKCcuYmxvY2snKTtcbiAgY29uc3QgJGFuc3dlclRleHQgPSAkKCcuYW5zd2VyVGV4dCcpO1xuICBjb25zdCAkYW5zd2VyQnV0dG9ucyA9ICQoJy5hbnN3ZXJCdXR0b25zJyk7XG4gIGNvbnN0ICRoZWFydHMgPSAkKCcuaGVhcnRzJyk7XG4gIGNvbnN0ICRhdWRpbyA9ICQoJy5hdWRpbycpO1xuICAvLyBjb25zdCAkYmFja2dyb3VuZCA9ICQodGhpcykuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJyk7XG5cbiAgbGV0IHF1ZXN0aW9uID0gbnVsbDtcbiAgbGV0IHF1ZXN0aW9uSW5kZXggPSBudWxsO1xuICBsZXQgbGl2ZXMgPSAzO1xuXG4gICRzcXVhcmVzLm9uKCdjbGljaycsIHJldmVhbFF1ZXN0aW9uKTtcblxuICBmdW5jdGlvbiByZXZlYWxRdWVzdGlvbigpIHtcblxuICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgcXVlc3Rpb25JbmRleCA9ICQodGhpcykuYXR0cignZGF0YS1pZCcpO1xuICAgIHF1ZXN0aW9uID0gdHJpdmlhUXVlc3Rpb25zQXJyYXlbcXVlc3Rpb25JbmRleF07XG5cbiAgICAkYW5zd2VyQnV0dG9ucy5lbXB0eSgpO1xuXG4gICAgJGFuc3dlclRleHQuaHRtbChxdWVzdGlvbi50ZXh0KTtcblxuICAgIHF1ZXN0aW9uLm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICBjb25zdCAkYnRuID0gJChgPGJ1dHRvbj4ke29wdGlvbn08L2J1dHRvbj5gKTtcbiAgICAgIC8vIGFkZCB0aGUgY2xpY2sgaGFuZGxlciB0byB0aGUgYnV0dG9uLi4uXG4gICAgICAkYW5zd2VyQnV0dG9ucy5hcHBlbmQoJGJ0bik7XG4gICAgfSk7XG5cbiAgfVxuXG4gICRhbnN3ZXJCdXR0b25zLm9uKCdjbGljaycsICdidXR0b24nLCBjaGVja0Fuc3dlcik7XG5cbiAgZnVuY3Rpb24gY2hlY2tBbnN3ZXIoZSkge1xuICAgIGlmICgkKGUudGFyZ2V0KS50ZXh0KCkgPT09ICdjbG93bnMnKSB7XG4gICAgICBhbGVydCgnWU9VIFdJTiEhIScpO1xuICAgICAgJGF1ZGlvLnBsYXkoKTtcbiAgICAgIC8vIGZ1bmN0aW9uIGhlcmUgdG8gdG9nZ2xlKCkgaW1hZ2VcbiAgICB9IGVsc2UgaWYgKCQoZS50YXJnZXQpLnRleHQoKSA9PT0gcXVlc3Rpb24uYW5zd2VyKXtcbiAgICAgIGFsZXJ0KHF1ZXN0aW9uLmNvcnJlY3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydChxdWVzdGlvbi5yZWJ1dHRhbCk7XG4gICAgICByZW1vdmVIZWFydCgpO1xuICAgICAgJHNxdWFyZXMuZXEocXVlc3Rpb25JbmRleCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH1cbiAgfVxuXG4gIC8vXG4gIGZ1bmN0aW9uIHJlbW92ZUhlYXJ0KCl7XG4gICAgbGl2ZXMtLTtcbiAgICAkaGVhcnRzLmVxKGxpdmVzKS5oaWRlKCk7XG4gICAgaWYgKGxpdmVzID09PSAwKSBnYW1lT3ZlcigpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2FtZU92ZXIoKXtcbiAgICBjb25zb2xlLmxvZygnZ2FtZSBvdmVyJyk7XG4gICAgY29uc3QgcGxheUFnYWluID0gY29uZmlybSgnUGxheSBhZ2Fpbj8nKTtcbiAgICBpZiAocGxheUFnYWluKXtcbiAgICAgICRoZWFydHMuc2hvdygpO1xuICAgICAgbGl2ZXMgPSAzO1xuICAgIH1cbiAgfVxuXG5cbi8vIHNob3cgYmFja2dyb3VuZCBpbWFnZXMgb24gZ2FtZWJvYXJkXG4gIC8vICQoJy5ibG9jaycpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAvLyAgICRiYWNrZ3JvdW5kLnNob3coKTtcbiAgLy8gfSk7XG5cbiAgLy8gZnVuY3Rpb24gdG8gdG9nZ2xlIHRoZSBiYWNrZ3JvdW5kIGltYWdlIG9uIGFuZCBvZmZcbiAgLy8gJCgnLmJsb2NrJykudG9nZ2xlKFxuICAvLyAgIGZ1bmN0aW9uKCkge1xuICAvLyAgICAgICAkKHRoaXMpLmNzcygnYmFja2dyb3VuZC1pbWFnZScsJ3VybCgnb24uanBnJyknKTtcbiAgLy8gICB9LFxuICAvLyAgIGZ1bmN0aW9uKCkge1xuICAvLyAgICAgICAkKHRoaXMpLmNzcygnYmFja2dyb3VuZC1pbWFnZScsJ3VybCgnb2ZmLmpwZycpJyk7XG4gIC8vICAgfSk7XG5cblxuLy8gQ3JlYXRlIGFycmF5IG9mIHF1ZXN0aW9ucyB3aGljaCB3aWxsIGFsaWduIHdpdGggdGhlIG1hdGNoaW5nIGluZGV4ZXMgb2YgZGl2c1xuLy8gYXJyYXkgdGhhdCBjb250YWlucyBxdWVzdGlvbnMsIGFuc3dlcnMgYW5kIHJlYWN0aW9ucyB0byB1c2VyIGlucHV0XG5cbiAgY29uc3QgdHJpdmlhUXVlc3Rpb25zQXJyYXkgPSBbe1xuICAgIHRleHQ6ICdXaGF0IHNjYXJlcyBDb2x1bWJ1cyBtb3JlIHRoYW4gem9tYmllcz8nLFxuICAgIG9wdGlvbnM6IFsnc3BpZGVycycsICdjbG93bnMnLCAnbWljZSddLFxuICAgIGFuc3dlcjogJ2Nsb3ducycsXG4gICAgY29ycmVjdDogJ1RoYXQgaXMgY29ycmVjdCEgTW92aW5nIHJpZ2h0IGFsb25nLi4nLFxuICAgIHJlYnV0dGFsOiAnU29ycnkhLCB0cnkgYWdhaW4uLidcbiAgfSwge1xuICAgIHRleHQ6ICdUaGUgWm9tYmllIEJyZWFrb3V0IHdhcyBjYXVzZWQgYnkgd2hpY2ggcm90dGVuIGZvb2Q/JyxcbiAgICBvcHRpb25zOiBbJ1N1c2hpJywgJ1NwYWdoZXR0aScsICdCdXJnZXJzJ10sXG4gICAgYW5zd2VyOiAnQnVyZ2VycycsXG4gICAgY29ycmVjdDogJ1ByZXR0eSBncm9zcyBodWg/IE1vdmUgYWhlYWQgb25lIHNwYWNlIScsXG4gICAgcmVidXR0YWw6ICdTZXJpb3VzbHk/J1xuICB9LCB7XG4gICAgdGV4dDogJ1doYXQgaXMgVGFsYWhhc3NlXFwnc1xcIG9uZSB3ZWFrbmVzcz8nLFxuICAgIG9wdGlvbnM6IFsnVHdpbmtpZXMnLCAnUHVwcGllcycsICdDdXBjYWtlcyddLFxuICAgIGFuc3dlcjogJ1R3aW5raWVzJyxcbiAgICBjb3JyZWN0OiAnWW91IGxpdmUgdG8gZGllIGFub3RoZXIgZGF5Li4nLFxuICAgIHJlYnV0dGFsOiAnUGVyaGFwcyB0aGF0IGlzIHlvdXIgb25lIHdlYWtuZXNzPydcbiAgfSx7XG4gICAgdGV4dDogJ1J1bGUgIzE3Li4gRG9uXFwnXFx0IGJlIGEgd2hhdD8nLFxuICAgIG9wdGlvbnM6IFsnWm9tYmllJywgJ0hlcm8nLCAnQ3Jvb2snXSxcbiAgICBhbnN3ZXI6ICdIZXJvJyxcbiAgICBjb3JyZWN0OiAnU28geW91IGFyZSBkb2luZyBncmVhdCBrZWVwIHN1cnZpdmluIGFuZCB0aHJpdmluIScsXG4gICAgcmVidXR0YWw6ICdab21iaWVzIGFyZSBlYXRpbmcgeW91LCBndWVzcyBiZXR0ZXIhJ1xuICB9LHtcbiAgICB0ZXh0OiAnV2hpY2ggZmFtb3VzIGFjdG9yIGRvZXMgQ29sdW1idXMgc2hvb3QgZm9yIGFjdGluZyBsaWtlIGEgem9tYmllPycsXG4gICAgb3B0aW9uczogWydCZW4gQWZmbGVjaycsICdCaWxsIE11cnJheScsICdCcmFkIFBpdHQnXSxcbiAgICBhbnN3ZXI6ICdCaWxsIE11cnJheScsXG4gICAgY29ycmVjdDogJ0kga25ldyB5b3VcXCdcXGQgZ2V0IHRoYXQgb25lISBPbiB0byB0aGUgbmV4dCBxdWVzdGlvbiEnLFxuICAgIHJlYnV0dGFsOiAnSWYgeW91IGdvdCB0aGlzIHdyb25nIHlvdSBkZXNlcnZlIHRvIGJlIGVhdGVuIGJ5IHpvbWJpZXMuJ1xuICB9LCB7XG4gICAgdGV4dDogJ1dpdGNoaXRhIGFuZCBMaWwgUm9jayBhcmUgaGVhZGluZyB3aGVyZT8nLFxuICAgIG9wdGlvbnM6IFsnVGhlIEdyYW5kIENhbnlvbicsICdEaXNuZXkgTGFuZCcsICdQYWNpZmljIFBsYXlsYW5kJ10sXG4gICAgYW5zd2VyOiAnUGFjaWZpYyBQbGF5bGFuZCcsXG4gICAgY29ycmVjdDogJ1dlbGwgZG9uZSEgUGxlYXNlIGNvbnRpbnVlLicsXG4gICAgcmVidXR0YWw6ICdOT1BFISBTb3JyeSwgeW91XFwnXFxyZSB6b21iaWUgZm9vZC4uJ1xuICB9LCB7XG4gICAgdGV4dDogJ1doaWNoIG9mIHRoZXNlIHJ1bGVzIGFyZSBub3Qgb24gQ29sdW1idXNcXCdcXCBsaXN0PycsXG4gICAgb3B0aW9uczogWydCb3VudHkgUGFwZXIgVG93ZWxzJywgJ0Fsd2F5cyB3ZWFyIHNvY2tzJywgJ0Vuam95IHRoZSBsaXR0bGUgdGhpbmdzJ10sXG4gICAgYW5zd2VyOiAnQWx3YXlzIHdlYXIgc29ja3MnLFxuICAgIGNvcnJlY3Q6ICdZb3UgYXJlIGEgdHJpdmlhIG1hc3RlciEnLFxuICAgIHJlYnV0dGFsOiAnTm90IHF1aXRlIGJ1dCBrZWVwIHRyeWluZyEnXG4gIH0sIHtcbiAgICB0ZXh0OiAnV2hhdCB3YXMgdGhlIGZpbG1cXCdcXHMgZ3Jvc3MgdGhyZWUgbW9udGhzIGFmdGVyIGl0IHJlbGVhc2VkICh3aXRoIGEgYnVkZ2V0IG9mIDIzIG1pbGxpb24gZG9sbGFycyk/JyxcbiAgICBvcHRpb25zOiBbJzc1IG1pbGxpb24nLCAnMSBiaWxsaW9uJywgJzQwIG1pbGxpb24nXSxcbiAgICBhbnN3ZXI6ICc3NSBtaWxsaW9uJyxcbiAgICBjb3JyZWN0OiAnVGhhdCBpcyBjb3JyZWN0ISBNb3ZpbmcgcmlnaHQgYWxvbmcuLicsXG4gICAgcmVidXR0YWw6ICdJIGtub3cgcmlnaHQ/IFdST05HLiBZb3UgbG9zZSBhIGxpZmUuJ1xuICB9LHtcbiAgICB0ZXh0OiAnV2hhdCBzY2FyZXMgQ29sdW1idXMgbW9yZSB0aGFuIHpvbWJpZXM/JyxcbiAgICBvcHRpb25zOiBbJ3NwaWRlcnMnLCAnY2xvd25zJywgJ21pY2UnXSxcbiAgICBhbnN3ZXI6ICdjbG93bnMnLFxuICAgIGNvcnJlY3Q6ICdZb3VcXCdcXHZlIG5lYXJseSB3b24hJyxcbiAgICByZWJ1dHRhbDogJ1NvcnJ5ISwgdHJ5IGFnYWluLi4nXG4gIH0sIHtcbiAgICB0ZXh0OiAnVGhlIFpvbWJpZSBCcmVha291dCB3YXMgY2F1c2VkIGJ5IHdoaWNoIHJvdHRlbiBmb29kPycsXG4gICAgb3B0aW9uczogWydTdXNoaScsICdTcGFnaGV0dGknLCAnQnVyZ2VycyddLFxuICAgIGFuc3dlcjogJ0J1cmdlcnMnLFxuICAgIGNvcnJlY3Q6ICdZb3UgbGl2ZSB0byBkaWUgYW5vdGhlciBkYXkuLicsXG4gICAgcmVidXR0YWw6ICdTZXJpb3VzbHk/J1xuICB9LCB7XG4gICAgdGV4dDogJ1doYXQgaXMgVGFsYWhhc3NlXFwnc1xcIG9uZSB3ZWFrbmVzcz8nLFxuICAgIG9wdGlvbnM6IFsnVHdpbmtpZXMnLCAnUHVwcGllcycsICdDdXBjYWtlcyddLFxuICAgIGFuc3dlcjogJ1R3aW5raWVzJyxcbiAgICBjb3JyZWN0OiAnU28geW91IGFyZSBkb2luZyBncmVhdCBrZWVwIHN1cnZpdmluIGFuZCB0aHJpdmluIScsXG4gICAgcmVidXR0YWw6ICdQZXJoYXBzIHRoYXQgaXMgeW91ciBvbmUgd2Vha25lc3M/J1xuICB9LHtcbiAgICB0ZXh0OiAnUnVsZSAjMTcuLiBEb25cXCdcXHQgYmUgYSB3aGF0PycsXG4gICAgb3B0aW9uczogWydab21iaWUnLCAnSGVybycsICdDcm9vayddLFxuICAgIGFuc3dlcjogJ0hlcm8nLFxuICAgIGNvcnJlY3Q6ICdJIGtuZXcgeW91XFwnXFxkIGdldCB0aGF0IG9uZSEgT24gdG8gdGhlIG5leHQgcXVlc3Rpb24hJyxcbiAgICByZWJ1dHRhbDogJ1pvbWJpZXMgYXJlIGVhdGluZyB5b3UsIGd1ZXNzIGJldHRlciEnXG4gIH0se1xuICAgIHRleHQ6ICdXaGljaCBmYW1vdXMgYWN0b3IgZG9lcyBDb2x1bWJ1cyBzaG9vdCBmb3IgYWN0aW5nIGxpa2UgYSB6b21iaWU/JyxcbiAgICBvcHRpb25zOiBbJ0JlbiBBZmZsZWNrJywgJ0JpbGwgTXVycmF5JywgJ0JyYWQgUGl0dCddLFxuICAgIGFuc3dlcjogJ0JpbGwgTXVycmF5JyxcbiAgICBjb3JyZWN0OiAnV2VsbCBkb25lISBQbGVhc2UgY29udGludWUuJyxcbiAgICByZWJ1dHRhbDogJ0lmIHlvdSBnb3QgdGhpcyB3cm9uZyB5b3UgZGVzZXJ2ZSB0byBiZSBlYXRlbiBieSB6b21iaWVzLidcbiAgfSwge1xuICAgIHRleHQ6ICdXaXRjaGl0YSBhbmQgTGlsIFJvY2sgYXJlIGhlYWRpbmcgd2hlcmU/JyxcbiAgICBvcHRpb25zOiBbJ1RoZSBHcmFuZCBDYW55b24nLCAnRGlzbmV5IExhbmQnLCAnUGFjaWZpYyBQbGF5bGFuZCddLFxuICAgIGFuc3dlcjogJ1BhY2lmaWMgUGxheWxhbmQnLFxuICAgIGNvcnJlY3Q6ICdZb3UgYXJlIGEgdHJpdmlhIG1hc3RlciEnLFxuICAgIHJlYnV0dGFsOiAnTk9QRSEgU29ycnksIHlvdVxcJ1xccmUgem9tYmllIGZvb2QuLidcbiAgfSwge1xuICAgIHRleHQ6ICdXaGljaCBvZiB0aGVzZSBydWxlcyBhcmUgbm90IG9uIENvbHVtYnVzXFwnXFwgbGlzdD8nLFxuICAgIG9wdGlvbnM6IFsnQm91bnR5IFBhcGVyIFRvd2VscycsICdBbHdheXMgd2VhciBzb2NrcycsICdFbmpveSB0aGUgbGl0dGxlIHRoaW5ncyddLFxuICAgIGFuc3dlcjogJ0Fsd2F5cyB3ZWFyIHNvY2tzJyxcbiAgICBjb3JyZWN0OiAnVGhhdCBpcyBjb3JyZWN0ISBNb3ZpbmcgcmlnaHQgYWxvbmcuLicsXG4gICAgcmVidXR0YWw6ICdOb3QgcXVpdGUgYnV0IGtlZXAgdHJ5aW5nISdcbiAgfSwge1xuICAgIHRleHQ6ICdXaGF0IHdhcyB0aGUgZmlsbVxcJ1xccyBncm9zcyB0aHJlZSBtb250aHMgYWZ0ZXIgaXQgcmVsZWFzZWQgKHdpdGggYSBidWRnZXQgb2YgMjMgbWlsbGlvbiBkb2xsYXJzKT8nLFxuICAgIG9wdGlvbnM6IFsnNzUgbWlsbGlvbicsICcxIGJpbGxpb24nLCAnNDAgbWlsbGlvbiddLFxuICAgIGFuc3dlcjogJzc1IG1pbGxpb24nLFxuICAgIGNvcnJlY3Q6ICdZb3VcXCdcXHZlIG5lYXJseSB3b24hJyxcbiAgICByZWJ1dHRhbDogJ0kga25vdyByaWdodD8gV1JPTkcuIFlvdSBsb3NlIGEgbGlmZS4nXG4gIH1dO1xuXG5cblxuXG5cblxufSk7XG5cbi8vIGNvbnN0ICRzcXVhcmVzID0gJCgnLmRpdicpO1xuLy8gJHNxdWFyZXMub24oJ2NsaWNrJywgKGUpID0+IHtcbi8vICAgY29uc3Qgc3F1YXJlSW5kZXggPSAkKGUudGFyZ2V0KS5pbmRleCgpO1xuLy8gICBjb25zdCBxdWVzdGlvbiA9IHRyaXZpYVF1ZXN0aW9uc0FycmF5W3NxdWFyZUluZGV4XTtcbi8vICAgY29uc3QgdXNlckFuc3dlciA9IHByb21wdChxdWVzdGlvbi50ZXh0KTtcbi8vICAgY29uc29sZS5sb2coc3F1YXJlSW5kZXgpO1xuLy9cbi8vICAgaWYgKHVzZXJBbnN3ZXIgIT09IHF1ZXN0aW9uLmFuc3dlcil7XG4vLyAgICAgYWxlcnQocXVlc3Rpb24ucmVidXR0YWwpO1xuLy8gICB9IGVsc2Uge1xuLy8gICAgIGFsZXJ0KHF1ZXN0aW9uLmNvcnJlY3QpO1xuLy8gICB9XG4vL1xuLy8gfSk7XG5cbi8vIHRhcmdldHMgcXVlc3Rpb25zIGJhc2VkIG9uIHRoZWlyIGVxdWFsIGluZGV4XG4vLyBhc3NpZ25zIG1hdGNoaW5nIGluZGV4IHRvIHF1ZXN0aW9ucyBmcm9tIGRpdnNcblxuICAvLyAkc3F1YXJlcy5vbignY2xpY2snLCAoZSkgPT4ge1xuICAvLyAgIGNvbnN0IGluZGV4ID0gJChlLnRhcmdldCkuaW5kZXgoKTtcbiAgLy8gICBjb25zdCBxdWVzdGlvbiA9IHRyaXZpYVF1ZXN0aW9uc0FycmF5W2luZGV4XTtcbiAgLy8gICBjb25zb2xlLmxvZyhxdWVzdGlvbik7XG4gIC8vIH0pO1xuXG4vLyBmb3IgbG9vcCB0byBjaGVjayB1c2VyIGlucHV0IHdpdGggYW5zd2VyOlxuICAvLyBmb3IgKGxldCBpID0gMCwgbCA9IHRyaXZpYVF1ZXN0aW9uc0FycmF5Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAvLyAgIGNvbnN0IHVzZXJBbnN3ZXIgPSBwcm9tcHQodHJpdmlhUXVlc3Rpb25zQXJyYXlbaV0ucXVlc3Rpb24pO1xuICAvLyAgIGlmICh1c2VyQW5zd2VyID09PSB0cml2aWFRdWVzdGlvbnNBcnJheVtpXS5hbnN3ZXIpe1xuICAvLyAgICAgYWxlcnQodHJpdmlhUXVlc3Rpb25zQXJyYXlbaV0ucmVidXR0YWwpO1xuICAvLyAgICAgaS0tO1xuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICBhbGVydCh0cml2aWFRdWVzdGlvbnNBcnJheVtpXS5jb3JyZWN0KTtcbiAgLy8gICB9XG4gIC8vIH1cblxuLy8gY29uc3QgdHJpdmlhUXVlc3Rpb25zID0gWydXaGF0IHNjYXJlcyBDb2x1bWJ1cyBtb3JlIHRoYW4gem9tYmllcz8nLFxuLy8gICAnVGhlIHpvbWJpZSBicmVha291dCB3YXMgY2F1c2VkIGJ5IHdoYXQgcm90dGVuIGZvb2Q/JywgJ1doYXQgaXMgVGFsYWhhc3NlcyBvbmUgd2Vha25lc3M/Jyxcbi8vICAgJ1J1bGUgIzE3Li4gRG9udCBiZSBhIHdoYXQ/JywgJ1doaWNoIGZhbW91cyBhY3RvciBkb2VzIENvbHVtYnVzIHNob290IGZvciBhY3RpbmcgbGlrZSBhIHpvbWJpZT8nLFxuLy8gICAnV2l0Y2hpdGEgYW5kIExpbCBSb2NrIGFyZSBoZWFkaW5nIHdoZXJlPycsICdXaGljaCBvZiB0aGVzZSBpcyBub3QgYSB2YWxpZCBydWxlIG9uIENvbHVtYnVzcyBsaXN0PycsXG4vLyAgICdXaGF0IHdhcyB0aGUgZmlsbXMgdG90YWwgZ3Jvc3MgYWZ0ZXIgdGhyZWUgbW9udGhzIHdpdGggaXRzIGJ1ZGdldCBvZiBhIG1lYXNsZXkgMjMgbWlsbGlvbiBkb2xsYXJzLi4/Jyxcbi8vICAgJ1doYXQgc2NhcmVzIENvbHVtYnVzIG1vcmUgdGhhbiB6b21iaWVzPycsXG4vLyAgICdUaGUgem9tYmllIGJyZWFrb3V0IHdhcyBjYXVzZWQgYnkgd2hhdCByb3R0ZW4gZm9vZD8nLCAnV2hhdCBpcyBUYWxhaGFzc2VzIG9uZSB3ZWFrbmVzcz8nLFxuLy8gICAnUnVsZSAjMTcuLiBEb250IGJlIGEgd2hhdD8nLCAnV2hpY2ggZmFtb3VzIGFjdG9yIGRvZXMgQ29sdW1idXMgc2hvb3QgZm9yIGFjdGluZyBsaWtlIGEgem9tYmllPycsXG4vLyAgICdXaXRjaGl0YSBhbmQgTGlsIFJvY2sgYXJlIGhlYWRpbmcgd2hlcmU/JywgJ1doaWNoIG9mIHRoZXNlIGlzIG5vdCBhIHZhbGlkIHJ1bGUgb24gQ29sdW1idXNzIGxpc3Q/Jyxcbi8vICAgJ1doYXQgd2FzIHRoZSBmaWxtcyB0b3RhbCBncm9zcyBhZnRlciB0aHJlZSBtb250aHMgd2l0aCBpdHMgYnVkZ2V0IG9mIGEgbWVhc2xleSAyMyBtaWxsaW9uIGRvbGxhcnMuLj8nIF07XG4iXX0=
