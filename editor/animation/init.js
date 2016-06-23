//Dont change it
requirejs(['ext_editor_io', 'jquery_190', 'raphael_210'],
    function (extIO, $, TableComponent) {

        function ChessCanvas(dom) {

            var colorOrange4 = "#F0801A";
            var colorOrange3 = "#FA8F00";
            var colorOrange2 = "#FAA600";
            var colorOrange1 = "#FABA00";

            var colorBlue4 = "#294270";
            var colorBlue3 = "#006CA9";
            var colorBlue2 = "#65A1CF";
            var colorBlue1 = "#8FC7ED";

            var colorGrey4 = "#737370";
            var colorGrey3 = "#9D9E9E";
            var colorGrey2 = "#C5C6C6";
            var colorGrey1 = "#EBEDED";

            var colorWhite = "#FFFFFF";

            var padding = 10;
            var cell = 40;

            var figures = {};


            var size = padding * 2 + cell * 9;
            var paper = Raphael(dom, size, size);

            var figSet = paper.set();

            var berserkFigure;

            var attrBoard = {"stroke": colorBlue4, "stroke-width": 4};
            var attrBlack = {"fill": colorBlue2, "stroke-width": 0};
            var attrWhite = {"fill": colorGrey1, "stroke-width": 0};
            var attrRook = {"stroke": colorBlue4, "stroke-width": 1.5,
                "font-family": "Roboto", "font-size": cell * 0.9};
            var attrText = {"stroke": colorBlue4, "font-family": "Roboto", "font-size": cell * 0.8, "font-weight": "bold"};

            var rows = "12345678";
            var cols = "abcdefgh";


            this.place_rook = function (coor) {
                var r = rows.indexOf(coor[1]);
                var c = cols.indexOf(coor[0]);
                return paper.text(padding + cell * 1.5 + c * cell, size - padding - cell * 1.55 - cell * r,
                    "♜").attr(attrRook);
            };


            this.prepare = function (berserk, enemies) {
                for (var i = 0; i < 8; i++) {
                    paper.text(padding + cell / 2, size - padding - cell * i - cell * 1.5, rows[i]).attr(attrText);
                    paper.text(padding + cell * 1.5 + cell * i, size - padding - cell / 2, cols[i]).attr(attrText);
                    for (var j = 0; j < 8; j++) {
                        paper.rect(padding + cell + cell * i, padding + cell * j, cell, cell).attr(
                            (i + j) % 2 === 1 ? attrBlack : attrWhite);
                    }
                }
                paper.rect(padding + cell, padding, cell * 8, cell * 8).attr(attrBoard);
                berserkFigure = this.place_rook(berserk).attr("fill", colorBlue1);
                for (i = 0; i < enemies.length; i++) {
                    var p = this.place_rook(enemies[i]);
                    p.attr("fill", colorOrange1);
                    figures[enemies[i]] = p;
                }
            };

            this.animate = function (moves) {
                var step = -1;
                var pause = 200;
                var moveTime = 300;
                (function move() {
                    step++;
                    if (step >= moves.length) {
                        return false;
                    }
                    var r = rows.indexOf(moves[step][1]);
                    var c = cols.indexOf(moves[step][0]);

                    setTimeout(function() {
                        berserkFigure.animate(
                            {"x": padding + cell * 1.5 + c * cell,
                            "y": size - padding - cell * 1.55 - cell * r},
                            moveTime,
                            callback=move
                        )
                    }, pause);
                    setTimeout(function() {figures[moves[step]].animate(
                        {"transform": "s0.01"}, 100);
                    }, moveTime + pause - 100);
                })();
            }

        }

        var io = new extIO({
            functions: {
                js: 'berserkRook',
                python: 'berserk_rook'
            },
            animation: function($expl, data){
                var checkioInput = data.in;
                var explanation = data.ext?data.ext["explanation"]:undefined;
                if (!checkioInput || !explanation){
                    return;
                }
                var canvas = new ChessCanvas($expl[0]);
                canvas.prepare(checkioInput[0], checkioInput[1]);
                canvas.animate(explanation);
            }
        });
        io.start();


    }
);
