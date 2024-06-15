
разбор синхронных и асинхронных операций и порядка исполнения в браузере (event loop), 
на примере 
MutationObserver

основное правило event loop:
синхронный код
все микротаски (promise, queueMicrotask MutationObserver)
1 макротаска (
    Таймеры: setTimeout, setinterval;
    События: клик, загрузка gpj, и тд;
    Браузерные нюансы: рендер, I/O, etc
    )
    