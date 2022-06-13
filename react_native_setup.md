# react-native setup


## windows에서 개발환경 만들기
윈도우즈(Windows)에서 react-native로 앱을 개발하는 방법으로 Expo CLI와 React Native CLI가 있다.

Expo CLI는 react-native로 앱을 개발할 때 자주 사용되는 네이티브 기능(위치 정보, 카메라 등)을 패키지로 묶어서 제공한다.
처음 시작은 Expo로 시작하면 편할 수 있지만, 사용하지 않은 네이티브 모듈로 인해,
앱 파일 크기가 커지는 문제와 Expo에서 제공하지 않은 네이티브 모듈을 추가할 때,
불편함 등이 있어 이 블로그에서는 Expo 사용을 추천하지 않는다.

우선, 최소한의 작업환경을 갖추기 위해선 Nodejs, Python, Android studio이 필요하다.
chocolatey를 설치하여 패키지를 관리해 보자.
mac os에서 패키지 관리를 위해 사용되는 homebrew에 해당된다고 생각하면 된다.

## 각 프로그램 사이트 [
  { chocolatey: https://chocolatey.org/ },
  { nodejs: https://nodejs.org/ },
  { python: https://www.python.org/ },
  { android_studio: https://developer.android.com/studio/ }
]

### chocolatey를 사용한 설치 순서 [
  { 1.: cmd를 실행한다. },
  { 2.: choco 설치 => @"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin" },
  { 3.: 정상 설치후 버전 확인 => choco –version },
  { 4.: node.js 설치 => choco install -y nodejs.install },
  { 5.: 정상 설치후 버전 확인 => node -–version },
  { 6.: node.js를 설치시 자동으로 따라오는 node.js의 패키지 매니저인 npm이 잘 설치되어있는지 확인한다. 버전확인 => npm --version },
  { 7.: python 설치 => choco install -y python2 },
  { 8.: 정상 설치후 버전 확인 => python --version },
  { 9.: React Native CLI 설치 => npm install -g react-native-cli},
  { 10.: 정상 설치후 버전 확인 => npx react-native --version },
  { 선택 사항: JDK가 설치 되어 있다면 설치 하지 않아도 된다. },
  { 11.: JDK 1.8설치 => choco install -y jdk8 },
  { 12.: 정상 설치후 버전 확인 => java -version, javac -version }
  { 13.: last android_studio 설치 끝 }
  { 14.: 환경 변수를 설정한다. }
  { 
    15.: [ 
          { 1.: "환경 변수를 검색해서 실행창을 킨 후 시스템변수에 새 사용자 변수를 만든다. 이름에는 ANDROID_HOME을 입력" }, 
          { 2.: "변수 값은 C:\Users\codej625\AppData\Local\Android\Sd 경로로 저장한다."}
        ]
  }
  { 
    16.: 자신의 안드로이드 SDK 위치가 어디인지 모르는 경우, 아래와 같이 안드로이드 스튜디오 SDK 설정 화면으로 이동
    안드로이드 스튜디오 SDK 설정 화면의 제일 상단을 보면 Android SDK Location 항목에서 자신의 안드로이드 SDK 위치를 확인한다.
  }
  {
    17.: ANDROID_HOME 환경 변수를 추가하였다면, 안드로이드 스튜디오의 platform-tools를 설정해 주어야 한다. 
    사용자 변수 리스트에서 Path를 선택하여 환경 변수 편집 화면으로 가서 새로 만들기를 선택한 후,
    C:\Users\[사용자 이름]\AppData\Local\Android\Sdk\platform-tools를 추가 시켜준다.
  }
  { 18: 셋팅이 끝났다면 cmd창을 켜 adb를 입력한다. 정상적으로 셋팅 되었다면 버전이 나온다. }
]

## react-native 프로젝트 생성 및 확인 [
  { 1.: 이제 아래에 React Native CLI 명령어를 통해 react-native 프로젝트를 생성해보자. },
  { 2.: npx react-native init [Test] },
  { 3.: 안드로이드에서 확인을 해보자! },
  { 4.: 1.경로이동 cd Test => 2.명령어 실행 npm run android }
]

### react-native를 사용하여 웹앱을 만들어보자! setup편 끝!



