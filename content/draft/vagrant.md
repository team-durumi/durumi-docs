---
title: vagrant
desciprtion: 개발 환경을 통일, 서버 공부를 목적으로 필요한 내용을 정리, 기록합니다.이 문서는 2020-04-21 팀두루미 PHP DEV DAY에 작성했습니다.
date: 2020-04-21
---

# vagrant

> 베이그런트는 포터블 가상화 소프트웨어 개발 환경의 생성 및 유지보수를 위한 오픈 소스 소프트웨어 제품의 하나이다. 베이그런트는 루비 언어로 작성되어 있지만 생태계는 몇 가지 언어로 개발을 지원한다. from [위키백과](https://ko.wikipedia.org/wiki/%EB%B2%A0%EC%9D%B4%EA%B7%B8%EB%9F%B0%ED%8A%B8_(%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4))

비싼 맥에서 간단하게 개발 환경을 통일하고 빠르게 개발할 수 있지만 굳이 오래된 기술인 가상 환경으로 시작하는 이유는?

```
$ brew cask install virtualbox virtualbox-extension-pack vagrant
$ vagrant box add ubuntu/bionic64
$ vagrant box add mozodev/xenial64-anyenv
$ du -sch ~/.vagrant.d/boxes
$ open ~/.vagrant.d/boxes
```
