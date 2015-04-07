    //シーン作成 ------------------------------------------    var scene = new THREE.Scene();         // カメラ設定 ------------------------------------------    // fov: 画角(視野角)    var fov = 75;    var width = $(window).width()*0.99; // 横幅!!!    var height = $(window).height()*0.7; // 縦幅!!!        // aspect: アスペクト比、カメラで撮影したものの縦横比    var aspect = width/height;        var near = 1;//カメラからの撮影開始位置、これより近いものは撮影しない        var far = 200;//カメラからの撮影終了位置、これより遠いものは撮影しない        // カメラ作成    var camera = new THREE.PerspectiveCamera(fov, aspect, near, far);    // カメラ配置    camera.position.set(0, 40, 60); // (x, y, z)    //カメラ角度?(unknown)    camera.lookAt(new THREE.Vector3(0, 0, 0));        // レンダラー追加 ----------------------------------------    var renderer = new THREE.WebGLRenderer();    renderer.setSize(width,height); // canvasのサイズ設定    $("body").append(renderer.domElement);    //document.body.appendChild(renderer.domElement);    // ライティング設定 ------------------------------------        //var color = 'white'; // 光の色        // ライトオブジェクト作成        //平行光        //var directionalLight = new THREE.DirectionalLight(color);        //directionalLight.position.set(0, 30, 0); // 光源の角度を設定(x,y,z)        //点光        var pointLight = new THREE.PointLight (0xffffff,1.0,0);//色,強さ,不明        pointLight.position.set(0, 100, 300);                scene.add(pointLight);        // オブジェクト追加 ----------------------------------------                //多角形    var geometry = new THREE.IcosahedronGeometry( 30, 1 )    var material = new THREE.MeshBasicMaterial( { color: 0x00c8ff, wireframe:true, wireframeLinewidth:2 } );    //var material = new THREE.MeshLambertMaterial( { color: 0x00c8ff, wireframe:true} );//影ができる的な？(上のよりリアルっぽい)    //var material = new THREE.MeshNormalMaterial( { color: 0x00c8ff, wireframe:false} );//虹色?//影できない    //var material = new THREE.MeshPhongMaterial( { color: 0x00c8ff, wireframe:false} );//球面っぽい(反射する?)//影あり    cube = new THREE.Mesh(geometry, material);    cube.position.set(0, 10, 0);    scene.add(cube);    /*//床    // width, height, widthSegments, heightSegments    var pgeometry = new THREE.PlaneBufferGeometry(500,50000,50,5000);    var pmaterial = new THREE.MeshLambertMaterial({color:0x006666,wireframe:true});    //var pmaterial = new THREE.MeshBasicMaterial({color:0x006666,wireframe:true});    var plane = new THREE.Mesh(pgeometry, pmaterial);    plane.position.set(0,0,-10);    plane.rotation.x = -90 * Math.PI / 180;    scene.add(plane);    */    //レンダリング時plane変化の初期値設定    /*var*/ speedplane = 0.1;    var speedy = 0.1;    //var key;    // レンダリング ----------------------------------------    function render() {        if(GL == 1){            // 回転アニメーション追加            requestAnimationFrame(render);                        cube.rotation.y -= speedy/16*Math.random();            cube.rotation.x += speedy/16;            //cube.rotation.x -= speedy/8;            //cube.position.z -= speedy;            //camera.position.z -= speedy;            //if(){            //    cube.rotation.x -= speedy/4;            //    cube.position.z -= speedy*2;            //    camera.position.z -= speedy*2;            //}            // シーンとカメラを渡してレンダリング            renderer.render(scene, camera);        }    }        $(function(){        //初期状態はterminal        //$("canvas").css("display","none");                //初期状態からGL        $("canvas").css("display","block");        GL = 1;        render();        audiod.play();        $("#res"+count).css("display","none");        terminalHeight = $(window).height()*0.25;        $("#terminal").css("height",terminalHeight);    });    