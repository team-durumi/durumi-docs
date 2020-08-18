---
title: vagrant
desciprtion: 개발 환경을 통일, 서버 공부를 목적으로 필요한 내용을 정리, 기록합니다.이 문서는 2020-04-21 팀두루미 PHP DEV DAY에 작성했습니다.
date: 2020-04-21
---

# vagrant

> 베이그런트는 포터블 가상화 소프트웨어 개발 환경의 생성 및 유지보수를 위한 오픈 소스 소프트웨어 제품의 하나이다. 베이그런트는 루비 언어로 작성되어 있지만 생태계는 몇 가지 언어로 개발을 지원한다. from [위키백과](https://ko.wikipedia.org/wiki/%EB%B2%A0%EC%9D%B4%EA%B7%B8%EB%9F%B0%ED%8A%B8_(%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4))

비싼 맥에서 간단하게 개발 환경을 통일하고 빠르게 개발할 수 있지만 굳이 오래된 기술인 가상 환경으로 시작하는 이유는?

- 개발 환경의 완벽한 격리와 통제
- 리눅스 서버 공부 및 기술 부채 상환

## 순서

1. 준비물 챙기기
2. virtualbox 사용해보기
3. vagrant 사용해보기
4. wordpress 프로젝트 띄워보기

## 1. 준비물 챙기기

```
$ brew cask install virtualbox virtualbox-extension-pack vagrant
$ vagrant box add ubuntu/bionic64
$ vagrant box add mozodev/xenial64-anyenv
$ du -sch ~/.vagrant.d/boxes
$ open ~/.vagrant.d/boxes
```

## 2. virtualbox 사용해보기

버추얼박스는 오라클이 만든 소프트웨어로 컴퓨터 머신을 만들어주는 대표적인 오픈소스 하이퍼바이저입니다. 가장 저렴하고 빠르게 가상머신을 만들 수 있습니다. 버추얼박스에서 만든 머신은 말그대로 우리가 사용하는 컴퓨터와 동일합니다. 하드디스크와 CDROM을 붙이고 메모리와 CPU를 할당하고 랜카드, 그래픽카드 꼽고 등등을 모두 소프트웨어로 동일하게 할 수 있습니다.

### 용어 정리

- 하이퍼바이저 (hypervisor): 소프트웨어로 컴퓨터를 만들어주는 아이.
> 하이퍼바이저는 호스트 컴퓨터에서 다수의 운영 체제를 동시에 실행하기 위한 논리적 플랫폼을 말한다. 가상화 머신 모니터 또는 가상화 머신 매니저라고도 부른다. [위키백과](https://ko.wikipedia.org/wiki/%ED%95%98%EC%9D%B4%ED%8D%BC%EB%B0%94%EC%9D%B4%EC%A0%80)

- 프로비저닝 (provisioning): 서버를 목적에 맞게 사용할 수 있는 상태로 만드는 행위랄까?
> 프로비저닝(provisioning)은 사용자의 요구에 맞게 시스템 자원을 할당, 배치, 배포해 두었다가 필요 시 시스템을 즉시 사용할 수 있는 상태로 미리 준비해 두는 것을 말한다. 서버 자원 프로비저닝, OS 프로비저닝, 소프트웨어 프로비저닝, 스토리지 프로비저닝, 계정 프로비저닝 등이 있다. [위키백과](https://ko.wikipedia.org/wiki/%ED%94%84%EB%A1%9C%EB%B9%84%EC%A0%80%EB%8B%9D)


...

## 3. vagrant 사용해보기

사용하는 vagrant boxes 위치
```
$ du -sch ~/.vagrant.d/boxes
$ open ~/.vagrant.d/boxes
```


## 4. wordpress 프로젝트 띄워보기